const { Category } = require("../models/category");
const { Product } = require("../models/products");
const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary").v2;

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

  let product = new Product({
    name: req.body.name,
    description: req.body.description,
    images: imgUrl,
    brand: req.body.brand,
    price: req.body.price,
    category: req.body.category,
    countInStock: req.body.countInStock,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
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
    images: imgUrl,
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

module.exports = router;
