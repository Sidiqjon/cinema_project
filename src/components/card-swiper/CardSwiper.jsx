import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./cardswiperstyle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { Pagination, Navigation } from "swiper/modules";
import { useNavigate } from 'react-router-dom'
import { IoStar } from "react-icons/io5";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import {useStateValue} from '@/context'


export default function CardSwiper({ movies }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const url = import.meta.env.VITE_IMAGE_URL
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const navigate = useNavigate()
  const [state, dispatch] = useStateValue() 

  return (
    <>
      <div className="card-swiper  container mx-auto mb-5">
        <button ref={prevRef} className="custom-prev_card">
          <FaAngleLeft />
        </button>
        <button ref={nextRef} className="custom-next_card">
          <FaAngleRight />
        </button>

        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={4}
          centeredSlides={false}
          spaceBetween={18}
          pagination={{
            el: ".custom-swiper-pagination",
            type:"fraction",
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            400: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 18,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwipeCard "
        >
          {movies?.map((movie) => (
            <SwiperSlide className="text-white">
                <div className="flex flex-col bg-[#1A1A1A] rounded-[5px] overflow-hidden hover:scale-[1.01] transition-all duration-300 ease-in-out">
                  <div className="relative">
                    <img
                      src={url + movie.poster_path}
                      alt={movie.title}
                      className="w-full  object-cover"
                      loading='lazy'
                      onClick={() => navigate(`/movie/${movie.id}`)}
                    />
                    <span className=" flex gap-1 justify-center items-center absolute top-2 left-2 bg-yellow-500 text-black text-sm font-bold px-3 py-[1px] rounded-[6px]">
                      <IoStar className='text-[17px] text-yellow-200'/> {movie.vote_average.toFixed(1)}
                    </span>
                    {/* <button onClick={()=> dispatch({type:"SAVED", payload: movie})} className='absolute top-0 right-0 m-2 z-10  text-primary'>
                      {
                        state.saved.some(({id}) => id === movie.id) ? <FaBookmark/> : <FaRegBookmark/>
                      }
                    </button> */}
                    <button
                      onClick={() => dispatch({ type: "SAVED", payload: movie })}
                      className="absolute top-0 right-0 m-[6px] cursor-pointer z-10 p-2 rounded-full backdrop-blur-sm bg-black transition-all duration-300 hover:scale-110"
                    >
                      {
                        state.saved.some(({ id }) => id === movie.id)
                          ? <FaBookmark className="text-primary " />
                          : <FaRegBookmark className="text-white " />
                      }
                    </button>
                  </div>
                    
                  <div className="p-5 text-white">
                    <h3 className="text-xl font-semibold mb-2 line-clamp-2 h-[56px]">{movie.title}</h3>
                    {/* <h3 className="text-xl font-semibold mb-2">{movie.title}</h3> */}
                    <p className="text-sm text-gray-400 italic">
                      {new Date(movie.release_date).toLocaleDateString("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                      })}
                    </p>
                  </div>
                </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-swiper-pagination mt-2 text-[#c61f1f] text-[14px] font-extrabold flex justify-center" />

      </div>
    </>
  );
}
