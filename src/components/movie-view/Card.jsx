import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoStar } from "react-icons/io5";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import {useStateValue} from '@/context'

const Card = ({movie}) => {
    const url = import.meta.env.VITE_IMAGE_URL
    const navigate = useNavigate()
    const [state, dispatch] = useStateValue() 

  return (
    <div className="flex flex-col bg-[#1A1A1A] rounded-[5px] overflow-hidden hover:scale-[1.01] transition-all duration-300 ease-in-out">
      <div className="relative">
        <img
          src={url + movie.poster_path}
          alt={movie.title}
          className="w-full  object-cover cursor-pointer "
          loading='lazy'
          onClick={() => navigate(`/movie/${movie.id}`)}
        />
        <span className=" flex gap-1 justify-center items-center absolute top-2 left-2 bg-yellow-500 text-black text-sm font-bold px-3 py-[1px] rounded-[6px]">
          <IoStar className='text-[17px] text-yellow-200'/> {movie.vote_average?.toFixed(1)}
        </span>
        {/* <button onClick={()=> dispatch({type:"SAVED", payload: movie})} className='absolute top-0 right-0 m-2 z-10  text-primary'>
          {
            state.saved.some(({id}) => id === movie.id) ? <FaBookmark/> : <FaRegBookmark/>
          }
        </button> */}
        <button
          onClick={() => dispatch({ type: "SAVED", payload: movie })}
          className="absolute top-0 right-0 m-[6px] z-10 p-2 cursor-pointer rounded-full backdrop-blur-sm bg-black transition-all duration-300 hover:scale-110"
        >
          {
            state.saved.some(({ id }) => id === movie.id)
              ? <FaBookmark className="text-primary " />
              : <FaRegBookmark className="text-white " />
          }
        </button>
      </div>
      
      <div className="p-5 text-white">
        <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
        <p className="text-sm text-gray-400 italic">
          {new Date(movie.release_date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </p>
      </div>
    </div>
  )
}

export default React.memo(Card)
