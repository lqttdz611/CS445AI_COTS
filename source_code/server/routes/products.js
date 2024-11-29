const { Category } = require("../models/category");
const { Product } = require("../models/products");
const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;
const multer  = require('multer')
const fs = require('fs')
var imagesArray = []
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
// })
const path = require("path"); // Import path for handling file extensions

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // Specify the destination folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname); // Get the file extension
    cb(null, file.fieldname + "-" + uniqueSuffix + extension); // Append the extension
  },
});
const upload = multer({ storage: storage })
router.post(`/upload`, upload.array("images"), async(req,res) => {
  imagesArray= [];
  const files= req.files;

  for(let i=0; i<files.length; i++) {
    imagesArray.push(files[i].filename);
  }

  console.log(imagesArray)

  res.json(imagesArray)
})

router.get("/", async (req, res) => {
  const productList = await Product.find().populate("category");

  if (!productList) {
    res.status(500).json({
      success: false,
    });
  }
  res.send(productList);
});

router.post("/create", async (req, res) => {
  const category = await Category.findById(req.body.category);
  if (!category) {
    return res.status(404).send("invalid Category!");
  }

  // const pLimit = (await import("p-limit")).default;
  // const limit = pLimit(2);

  // const imagesToUpLoad = req.body.images.map((image) => {
  //   return limit(async () => {
  //     const result = await cloudinary.uploader.upload(image);
  //     return result;
  //   });
  // });

  // const uploadStatus = await Promise.all(imagesToUpLoad);

  // const imgUrl = uploadStatus.map((item) => {
  //   return item.secure_url;
  // });

  // if (!uploadStatus) {
  //   return res.status(500).json({
  //     err: "images cannot upload!",
  //     status: "false",
  //   });
  // }

  let product = new Product({
    name: req.body.name,
    description: req.body.description,
    images: imagesArray,
    brand: req.body.brand,
    price: req.body.price,
    oldPrice: req.body.oldPrice,
    category: req.body.category,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    isFeatured: req.body.isFeatured,
  });

  product = await product.save();
  if (!product) {
    res.status(500).json({
      error: err,
      success: false,
    });
  }

  res.status(201).json(product);
});

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      message: "The product with id given was not found!",
    });
  }
  res.status(200).send(product);
});

router.put("/:id", async (req, res) => {

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

 

  const product = await Product.findByIdAndUpdate(req.params.id,{
    name: req.body.name,
    description: req.body.description,
    images: imagesArray,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
    isFeatured: req.body.isFeatured, },
    {
    new: true,
    }
  );

  if (!product) {
    res.status(404).json({
      message: "the product can not be found!",
      status: false,
    });
  }

  res.status(200).json({
    message: "the product is updated!",
    status: true,
  });
});

router.delete("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  const images = product.images;

  if (images.length!==0) {
    for(image of images) {
      fs.unlinkSync(`uploads/${image}`);
    }
  }
  const deleteProduct = await Product.findByIdAndDelete(req.params.id);
  if (!deleteProduct) {
    return res.status(404).json({
      message: "product not found!",
      status: false,
    });
  }

  res.status(200).send({
    message: "the product was deleted!",
    status: true,
  });
});


// router.delete("/:id", async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Check if the ID is valid
//     if (!id || !mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({
//         message: "Invalid product ID!",
//         status: false,
//       });
//     }

//     const product = await Product.findById(id);

//     // Check if the product exists
//     if (!product) {
//       return res.status(404).json({
//         message: "Product not found!",
//         status: false,
//       });
//     }

//     // Delete images from the filesystem
//     if (product.images.length !== 0) {
//       for (const image of product.images) {
//         fs.unlinkSync(`upload/${image}`);
//       }
//     }

//     // Delete the product from the database
//     await Product.findByIdAndDelete(id);

//     res.status(200).send({
//       message: "The product was deleted!",
//       status: true,
//     });
//   } catch (error) {
//     res.status(500).json({
//       message: "An error occurred while deleting the product.",
//       status: false,
//       error: error.message,
//     });
//   }
// });
module.exports = router;
