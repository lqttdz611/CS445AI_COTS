import React from 'react'
import { Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import {Navigation }from "swiper/modules";
import ProductItem from '../../../components/ProductItem';

const RelatedProduct = () => {
  return (
    <>
    <div className="d-flex align-items-center mt-3 mb-4">
                <div className="info w-75 ">
                  <h3 className="mb-0 hd">Related Product</h3>
                  
                </div>

                {/* <Button className="viewAllBtn ml-auto">
                  View All <IoMdArrowRoundForward />
                </Button> */}
              </div>

              <div className="product_row w-100 mt-0 mb-5" >
                <Swiper
                  slidesPerView={5}
                  spaceBetween={10}
                  navigation={true}
                  slidesPerGroup={3}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div></>
  )
}

export default RelatedProduct