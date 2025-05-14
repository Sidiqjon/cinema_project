import React from 'react'
import { useFetch } from '@/hooks/useFetch'

const Genres = ({setGenre}) => {
    const {data,error,loading} = useFetch("genre/movie/list")
    
  return (
    <div className='container mx-auto py-4 flex gap-6 overflow-auto'>
        {
            data?.genres?.map((item) => (
                <div onClick={() => setGenre(item.id.toString())} className='text-nowrap cursor-pointer select-none' key={item.id}>{item.name}</div>
            ))
        }
    </div>
  )
}

export default Genres