import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({movie}) => {
    const url = import.meta.env.VITE_IMAGE_URL
    const navigate = useNavigate()
  return (
    <div className="flex flex-col bg-[#1A1A1A] rounded-[5px] overflow-hidden hover:scale-[1.01] transition-all duration-300 ease-in-out">
      <div className="relative">
        <img
          src={url + movie.poster_path}
          alt={movie.title}
          className="w-full  object-cover loading-lazy"
          onClick={() => navigate(`/movie/${movie.id}`)}
        />
        <span className=" flex gap-1 justify-center items-center absolute top-2 right-2 bg-yellow-400 text-black text-sm font-bold px-3 py-[1px] rounded-[6px]">
          <p className='text-[19px] text-amber-600'>✭</p> {movie.vote_average.toFixed(1)}
        </span>
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

// {
//     "adult": false,
//     "backdrop_path": "/cJvUJEEQ86LSjl4gFLkYpdCJC96.jpg",
//     "genre_ids": [
//         10752,
//         28
//     ],
//     "id": 1241436,
//     "original_language": "en",
//     "original_title": "Warfare",
//     "overview": "A platoon of Navy SEALs embarks on a dangerous mission in Ramadi, Iraq, with the chaos and brotherhood of war retold through their memories of the event.",
//     "popularity": 538.9681,
//     "poster_path": "/j8tqBXwH2PxBPzbtO19BTF9Ukbf.jpg",
//     "release_date": "2025-04-09",
//     "title": "Warfare",
//     "video": false,
//     "vote_average": 7.135,
//     "vote_count": 245
// }