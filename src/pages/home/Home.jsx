import MovieView from '@/components/movie-view/MovieView';
import Skeleton from '@/components/skeleton/Skeleton';
import { useFetch } from '@/hooks/useFetch'
import React from 'react'
import HomeSwiper from '@/components/swiper/Swiper';
import CardSwiper from '@/components/card-swiper/CardSwiper';

const Home = () => {
  const {data,error,loading} = useFetch("/discover/movie", {without_genres: "18,10749,36"})
  const {
    data: cardSwiperData,
    loading: cardSwiperLoading,
    error: cardSwiperError
  } = useFetch("/discover/movie", { page: 30, without_genres: "18,10749,36" });

  
  return (
    <div>
      <HomeSwiper movies={data?.results}/>
      <CardSwiper  movies={cardSwiperData?.results} />
      {loading && <Skeleton count={20}/>}
    </div>
  )
}

export default React.memo(Home)
