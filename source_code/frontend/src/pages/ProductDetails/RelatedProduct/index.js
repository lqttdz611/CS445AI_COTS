
import React from "react";
import Rating from '@mui/material/Rating';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
// import "./styles.css"; // You'll need to create this

const RelatedProduct = () => {
  // Sample related products data - replace with your actual data
  const relatedProducts = [
    {
      id: 1,
      name: "Apple MacBook Pro - Silver",
      brand: "Apple",
      image: "https://i.pinimg.com/originals/8d/19/df/8d19df0f1d0347d9dec351afa2554106.jpg",
      rating: 4,
      price: 2449.49
    },
    {
      id: 2,
      name: "Apple Watch Series 7",
      brand: "Apple",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MKU93_VW_34FR+watch-45-alum-midnight-nc-7s_VW_34FR_WF_CO?wid=1400&hei=1400",
      rating: 4.5,
      price: 399.99
    },
    {
      id: 3,
      name: "AirPods Pro",
      brand: "Apple",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg",
      rating: 5,
      price: 249.99
    },
    {
      id: 4,
      name: "iPad Pro 12.9",
      brand: "Apple",
      image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-select-202210",
      rating: 4.8,
      price: 1099.99
    },
  ];

  return (
    <div className="related-products-section">
      <div className="section-header">
        <h4 className="title">Related Products</h4>
        <p className="subtitle">People also search for these items</p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="related-products-swiper"
      >
        {relatedProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <Link to={`/product/${product.id}`} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h5 className="product-name">{product.name}</h5>
                <p className="product-brand">{product.brand}</p>
                <div className="product-rating">
                  <Rating value={product.rating} readOnly precision={0.5} />
                </div>
                <p className="product-price">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedProduct;