import React from "react";

import Rating from '@mui/material/Rating';import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
// import { productData } from "../../../static/data";
import { Link } from "react-router-dom";
const RelatedProduct = () => {
  return (
    <>
      <div className=" card-body">
        <div className="mt-4 mb-2 text-center">
          <h4>Related Products</h4>
          <p class="card-text">People also search for this items</p>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="productItem">
              <div className="imgWrapper">
                <Link to = '/'>
                <div className="item-heading">
                  <h5 className="text-text-truncate mb-0">
                  Apple MacBook Pro - Silver
                  </h5>
                  <small className="text-body">by Apple</small>
                </div>
                <div className="img-container w-50 mx-auto py-50">
                <img src="https://i.pinimg.com/originals/8d/19/df/8d19df0f1d0347d9dec351afa2554106.jpg" className="w-100"></img>

                </div>
                <Rating name="read-only" value={4} readOnly />
                <p className="card-text text-primary mb-0">$2449.49</p>
                
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
        <div className="w-100 mt-0"></div>
      </div>
    </>
  );
};

export default RelatedProduct;
