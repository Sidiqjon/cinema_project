import React from 'react'
import {useStateValue} from '@/context'
import MovieView from '@/components/movie-view/MovieView'

const Saved = () => {
  const [state] = useStateValue()
    
  return (
    <div className='mb-8'>
      <h1 className='container mx-auto text-3xl font-bold  pt-7 text-primary mb-6'>Saved Movies</h1>
      <div className='container mx-auto mb-8'>
        <hr className='border-[1px] border-[#2D2D2D]' />
      </div>
      <MovieView movies={state.saved}/>
    </div>
  )
}

export default Saved