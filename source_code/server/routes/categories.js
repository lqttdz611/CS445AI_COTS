const { Category } = require("../models/category");
const express = require("express");
const router = express.Router();
// const pLimit = require("p-limit");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUD_NAME_CLOUDINARY,
  api_key: process.env.REACT_APP_CLOUD_APIKEY_CLOUDINARY,
  api_secret: process.env.REACT_APP_CLOUD_APISECRET_CLOUDINARY,
});

router.get("/", async (req, res) => {
  const categoryList = await Category.find();

  if (!categoryList) {
    res.status(500).json({ success: false });
  }
  res.send(categoryList);
});

router.get('/:id', async (req,res) => {
  const category = await Category.findById(req.params.id);

  if(!category) {
    res.status(500).json({message: 'The category with the given ID was not found.'})
  }
  return res.status(200).send(category)
})



router.delete('/:id', async (req,res) => {
  const deleteCate = await Category.findByIdAndDelete(req.params.id);

  if(!deleteCate) {
    res.status(404).json({
      message: "Category not found!",
      success: false
    })
  }

  res.status(200).json({
    success: true,
    message: "Category Deleted!"
  })
})

router.post("/create", async (req, res) => {
  const pLimit = (await import("p-limit")).default;
  const limit = pLimit(2);

  // Validate images array
  if (!Array.isArray(req.body.images) || req.body.images.length === 0) {
    return res.status(400).json({ message: "Invalid or missing images array." });
  }

  try {
    const imagesToUpLoad = req.body.images.map((image) => {
      return limit(async () => {
        const result = await cloudinary.uploader.upload(image);
        return result;
      });
    });

    const uploadStatus = await Promise.all(imagesToUpLoad);
    const imgUrl = uploadStatus.map((item) => item.secure_url);

    let category = new Category({
      name: req.body.name,
      images: imgUrl,
      description: req.body.description,
    });

    category = await category.save();
    res.status(201).json(category);
    
  } catch (error) {
    res.status(500).json({
      err: "Images cannot be uploaded or category creation failed.",
      message: error.message,
      success: false,
    });
  }
});

router.put('/:id', async (req,res) => {
  const pLimit = (await import("p-limit")).default;
  const limit = pLimit(2);

  const imagesToUpLoad = req.body.images.map((image) => {
    return limit(async () => {
      const result = await cloudinary.uploader.upload(image);
      return result;
    });
  });

  const uploadStatus = await Promise.all(imagesToUpLoad);

  const imgUrl = uploadStatus.map((item) => {
    return item.secure_url;
  });

  if (!uploadStatus) {
    return res.status(500).json({
      err: "images cannot upload!",
      status: "false",
    });
  }
  const category = await Category.findByIdAndUpdate(req.params.id, {
    name: req.body.name,
    images: imgUrl,
    description: req.body.description,
  }, {
    new:true
  })

  if(!category) {
    return res.status(500).json({
      message: 'Category cannot be updated!',
      success: false
    })
  }
})

module.exports = router;
