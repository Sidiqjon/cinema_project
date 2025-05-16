import React from 'react'
import {useStateValue} from '@/context'
import MovieView from '@/components/movie-view/MovieView'

const Saved = () => {
  const [state] = useStateValue()
    
  return (
    <div>
      <h1 className='container mx-auto text-3xl font-bold pb-4 pt-4 text-primary border-b border-gray-500 mb-7'>Saved Movies</h1>
      <MovieView movies={state.saved}/>
    </div>
  )
}

export default Saved
