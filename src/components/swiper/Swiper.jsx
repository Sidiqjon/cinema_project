import React, { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Thumbs } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/thumbs"
import "./style.css"
import { IoPlay } from "react-icons/io5"
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6"

const HomeSwiper = ({ movies }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const mainSwiperRef = useRef(null)
  const url = import.meta.env.VITE_IMAGE_URL

  return (
    <div className="hero__swiper">
      <div className="main-swiper relative">
        <Swiper
          spaceBetween={10}
          navigation={{
            prevEl: ".thumb-left",
            nextEl: ".thumb-right"
          }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[Navigation, Thumbs]}
          onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
          className="mySwiper2"
        >
          {movies?.map((item) => (
            <SwiperSlide key={item.id}>
                <div className="relative w-full h-[500px]">
                  <img
                  src={url + item.backdrop_path}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center">
                  <h3 className="text-3xl">{item.original_title}</h3>
                  <p className="text-sm text-white italic mt-2">
                    {new Date(item.release_date).toLocaleDateString("en-GB", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <ul className="flex gap-2 justify-center mb-4 mt-2 text-sm">
                    <li>1h 34m</li>
                    <li>EN</li>
                    <li>6+</li>
                  </ul>
                  <div className="flex justify-center items-center gap-[10px] w-[280px] h-[52px] rounded-[12px] bg-white text-[#C61F1F] cursor-pointer">
                    <IoPlay className="text-2xl" />
                    <button>Watch</button>
                  </div>
                </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="thumb-controls mt-4 relative">
        <button className="nav-button thumb-left">
          <FaAngleLeft size={20} />
        </button>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs]}
          className="mySwiper"
        >
          {movies?.map((item) => (
            <SwiperSlide key={item.id}>
              <img
                src={url + item.backdrop_path}
                className="transform transition-transform duration-500 hover:scale-105 hover:-translate-y-1 h-[100px] object-cover w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="nav-button thumb-right">
          <FaAngleRight size={20} />
        </button>
      </div>
    </div>
  )
}

export default React.memo(HomeSwiper)
