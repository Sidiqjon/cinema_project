import MovieView from '@/components/movie-view/MovieView';
import Skeleton from '@/components/skeleton/Skeleton';
import { useFetch } from '@/hooks/useFetch'
import React from 'react'
import HomeSwiper from '@/components/swiper/Swiper';

const Home = () => {
  const {data,error,loading} = useFetch("/discover/movie")
  console.log(data);
  
  return (
    <div>
      <HomeSwiper movies={data?.results}/>
      <MovieView movies={data?.results}/>
      {loading && <Skeleton count={20}/>}
    </div>
  )
}

export default React.memo(Home)
