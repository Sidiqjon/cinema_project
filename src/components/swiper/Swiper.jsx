import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { IoPlay } from "react-icons/io5"

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./style.css";


export default function HomeSwiper({ movies }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiperReady, setSwiperReady] = useState(false);

  const url = import.meta.env.VITE_IMAGE_URL;

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, [swiperReady]);

  return (
    <div className="hero_swiper mx-auto"> 
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setSwiperReady(true);
        }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {movies?.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={url + item.backdrop_path}
              className="transform transition-transform duration-500 hover:scale-105 hover:-translate-y-1"
            />
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center w-full flex flex-col justify-center items-center">
              <h3 className="text-[40px]">{item.original_title}</h3>
              <div className="flex gap-2 justify-center items-center mb-3 mt-2">
                  <div>
                    <p className="text-[18px] text-white italic">
                      {new Date(item.release_date).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="text-4xl text-white mb-1">·</div>
                  <div>
                    <p className="text-[20px] text-white italic">
                        {item.original_language.toUpperCase()}
                    </p>
                  </div>
              </div>
              <div className="flex justify-center items-center max-[700px]:w-[300px] max-[600px]:w-[150px]  gap-[10px] w-[380px] h-[52px] rounded-[12px] bg-white text-[#C61F1F] cursor-pointer">
                <IoPlay className="text-2xl"/>
                <button className="cursor-pointer text-[16px]">Watch Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="thumb-controls flex items-center justify-center gap-444 mt-2">
        <button ref={prevRef} className="custom-prev">
          <FaAngleLeft />
        </button>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {movies?.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={url + item.backdrop_path}
                className="transition-transform duration-300 hover:scale-105"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button ref={nextRef} className="custom-next">
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}






































// import React, { useEffect, useRef, useState } from "react"
// import { Swiper, SwiperSlide } from "swiper/react"
// import { Navigation, Thumbs } from "swiper/modules"
// import "swiper/css"
// import "swiper/css/navigation"
// import "swiper/css/thumbs"
// import "./style.css"
// import { IoPlay } from "react-icons/io5"
// import { FaAngleRight, FaAngleLeft } from "react-icons/fa6"

// const HomeSwiper = ({ movies }) => {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null)
//   const mainSwiperRef = useRef(null)
//   const url = import.meta.env.VITE_IMAGE_URL

//   return (
//     <div className="hero__swiper">
//       <div className="main-swiper relative">
//         <Swiper
//           spaceBetween={10}
//           navigation={{
//             prevEl: ".thumb-left",
//             nextEl: ".thumb-right"
//           }}
//           thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
//           modules={[Navigation, Thumbs]}
//           onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
//           className="mySwiper2"
//         >
//           {movies?.map((item) => (
//             <SwiperSlide key={item.id}>
//                 <div className="relative w-full h-[500px]">
//                   <img
//                   src={url + item.backdrop_path}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center">
//                   <h3 className="text-3xl">{item.original_title}</h3>
//                   <p className="text-sm text-white italic mt-2">
//                     {new Date(item.release_date).toLocaleDateString("en-GB", {
//                       year: "numeric",
//                       month: "long",
//                       day: "numeric",
//                     })}
//                   </p>
//                   <ul className="flex gap-2 justify-center mb-4 mt-2 text-sm">
//                     {/* <li>{item.runtime} min</li> */}
//                     <li>{item.original_language.toUpperCase()}</li>
//                     {/* <li>6+</li> */}
//                   </ul>
//                   <div className="flex justify-center items-center gap-[10px] w-[280px] h-[52px] rounded-[12px] bg-white text-[#C61F1F] cursor-pointer">
//                     <IoPlay className="text-2xl" />
//                     <button>Watch</button>
//                   </div>
//                 </div>
//                 </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <div className="thumb-controls mt-4 relative">
//         <button className="nav-button thumb-left">
//           <FaAngleLeft size={20} />
//         </button>

//         <Swiper
//           onSwiper={setThumbsSwiper}
//           spaceBetween={10}
//           slidesPerView={4}
//           watchSlidesProgress={true}
//           modules={[Navigation, Thumbs]}
//           className="mySwiper"
//         >
//           {movies?.map((item) => (
//             <SwiperSlide key={item.id}>
//               <img
//                 src={url + item.backdrop_path}
//                 className="h-[100px] object-cover w-full"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         <button className="nav-button thumb-right">
//           <FaAngleRight size={20} />
//         </button>
//       </div>
//     </div>
//   )
// }

// export default React.memo(HomeSwiper)
