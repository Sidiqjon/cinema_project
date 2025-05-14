import React from 'react'
import { useFetch } from '@/hooks/useFetch'
import "./style.css"

const Genres = ({setGenre, genre}) => {
    const {data,error,loading} = useFetch("genre/movie/list")
    
  return (
    <div className='container mx-auto py-4 flex gap-2 overflow-auto mb-3'>
        {
            data?.genres?.map((item) => (
                <div onClick={() => setGenre(item.id.toString())} className={`text-nowrap cursor-pointer select-none px-8 py-3 ${genre === item.id.toString() ? 'bg-primary text-white' : 'bg-[#111111] text-white'} rounded-[12px]`} key={item.id}>{item.name}</div>
            ))
        }
    </div>
  )
}

export default Genres
