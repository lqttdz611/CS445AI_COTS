const { Category } = require("../models/category");
const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.REACT_APP_CLOUD_NAME_CLOUDINARY,
  api_key: process.env.REACT_APP_CLOUD_APIKEY_CLOUDINARY,
  api_secret: process.env.REACT_APP_CLOUD_APISECRET_CLOUDINARY,
});
const multer  = require('multer')
const fs = require('fs')


var imagesArray = []
var categoryEditId;



const path = require("path"); // Import path for handling file extensions

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/categoryUploaded"); // Specify the destination folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname); // Get the file extension
    cb(null, file.fieldname + "-" + uniqueSuffix + extension); // Append the extension
  },
});
const upload = multer({ storage: storage })

router.post(`/upload`, upload.array("images"), async(req, res) => {
  if(categoryEditId !== undefined) {
    const category = await Category.findById(categoryEditId);

    const images = category.images;

    if(images.length !==0 ) {
      for(image of images) {
        fs.unlinkSync(`uploads/categoryUploaded/${images}`);
      }
    }
  }

    imagesArray = [];
    const files = req.files;

    for(let i=0; i<files.length; i++) {
      imagesArray.push(files[i].filename)
    }

    res.json(imagesArray);
  }
)

router.get("/all", async (req, res) => {
  const categoryList = await Category.find();

  if (!categoryList) {
    res.status(500).json({ success: false });
  }
  res.send(categoryList);
});

router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1; 
    const perPage = 5;
    const totalPosts = await Category.countDocuments();
    const totalPages = Math.ceil(totalPosts/perPage);

    if(page>totalPages) {
      return res.status(404).json({message: "Page not found!"})
    }
  const categoryList = await Category.find().skip((page -1) *perPage).limit(perPage).exec();
  if (!categoryList) {
    res.status(500).json({ success: false });
  }
  return res.status(200).json({
    "categoryList": categoryList,
    "totalPages": totalPages,
    "page": page
  })
  } catch (error) {
    res.status(500).json({
      success: false
    })
  }

  
});

router.get('/:id', async (req,res) => {
  categoryEditId=req.params.id;
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
  let category = new Category({
    name: req.body.name,
    images: imagesArray,
    description: req.body.description,
  });

  if (!category) {
    res.status(500).json({
      err: err,
      success: "false",
    });
  }

  category = await category.save();

  res.status(201).json(category);
});


router.put('/:id', async (req, res) => {
  try {
    
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        images: imagesArray,
        description: req.body.description,
      },
      { new: true }
    );

    if (!category) {
      return res.status(500).json({
        message: 'Category cannot be updated',
        success: false,
      });
    }

    res.status(200).json({
      message: 'Category updated successfully',
      success: true,
      category,
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while updating the category',
      success: false,
      error: error.message,
    });
  }
});


module.exports = router;
