// import React from "react";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Autoplay, Navigation } from "swiper/modules";
// import banner1 from "../../Assets/images/banner1.jpg";
// import banner2 from "../../Assets/images/banner2.jpg";
// import banner3 from "../../Assets/images/banner3.jpg";
// import banner4 from "../../Assets/images/banner4.jpg";
// const Hero = () => {
//   return (
//     <>
//       <div className="container mt-3 pl-0">
//         <div className="homeBannerSection">
//           <Swiper
//             slidesPerView={1}
//             spaceBetween={15}
//             navigation={true}
//             autoplay={{
//               delay: 2500,
//               disableOnInteraction: false,
//             }}
            
//             modules={[Navigation, Autoplay]}
//             loop={false}
//             className="mySwiper"
//           >
//             <SwiperSlide>
//               <div className="item">
//                 <img
//                   src={banner1}
//                   className="w-100"
//                 ></img>
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className="item">
//                 <img
//                   src={banner2}
//                   className="w-100"
//                 ></img>
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className="item">
//                 <img src={banner3} className="w-100"></img>
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className="item">
//                 <img src={banner4}  className="w-100"></img>
//               </div>
//             </SwiperSlide>

            
//           </Swiper>
//         </div>
//       </div>
//     </>
//     // <div
//     //   className={`relative min-h-[70vh] 800px:min-h-[80vh] bg-no-repeat w-full flex items-center`}
//     // >
//     //   <Swiper>
//     //     <SwiperSlide>
//     //   <img src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/watch-series9-shop-202309_GEO_VN_FMT_WHH?wid=1472&hei=618&fmt=jpeg&qlt=90&.v=1693620544406" alt="home page picture"></img>
//     //   </SwiperSlide>
//     //   <SwiperSlide>
//     //   <img src="https://www.bobswatches.com/images/cms/Homepage-Banner-Breitlin.jpg" alt="home page picture"></img>
//     //   </SwiperSlide>

//     //   </Swiper>
//     // </div>
//   );
// };

// export default Hero;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import banner1 from "../../Assets/images/banner1.jpg";
import banner2 from "../../Assets/images/banner2.jpg";
import banner3 from "../../Assets/images/banner3.jpg";
import banner4 from "../../Assets/images/banner4.jpg";

const Hero = () => {
  return (
    <>
      <div className="container mt-3 pl-0">
        <div className="homeBannerSection">
          <Swiper
            slidesPerView={1}
            spaceBetween={0}  /* Set space between slides to 0 */
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            loop={false}
            className="mySwiper"
          >
            {[banner1, banner2, banner3, banner4].map((banner, index) => (
              <SwiperSlide key={index}>
                <div className="item">
                  <img src={banner} className="banner-img w-100" alt={`Banner ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Hero;
