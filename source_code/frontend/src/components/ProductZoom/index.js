import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import React, { useContext, useRef } from "react";

const ProductZoom = () => {
  const zoomSliderBig = useRef();
  const zoomSlider = useRef();
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
  };

  const goto = (index) => {
    zoomSlider.current.slickGoTo(index);
    zoomSliderBig.current.slickGoTo(index);
  }

  var settings2 = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
  };
  return(
    <>
    
    <div className="productZoom">
    <div className="productZoom position-relative">
              <div className="badge badge-primary">
                23%
              </div>
              <Slider
                {...settings2}
                className="zoomSliderBig"
                ref={zoomSliderBig}
              >
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"
                  />
                </div>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg"
                  />
                </div>
                <div className="item">
                  <InnerImageZoom
                    zoomType="hover"
                    zoomScale={1}
                    src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
                  />
                </div>
              </Slider>
            </div>

            <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
              <div className="item">
                <img
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg"
                  className="w-100"
                  onClick={() => goto(0)}
                ></img>
              </div>

              <div className="item">
                <img
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image2-47.jpg"
                  className="w-100"
                  onClick={() => goto(1)}
                ></img>
              </div>

              <div className="item">
                <img
                  src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image3-35.jpg"
                  className="w-100"
                  onClick={() => goto(2)}
                ></img>
              </div>
            </Slider>
    </div>
    </>
  )
}
export default ProductZoom;