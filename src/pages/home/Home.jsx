import MovieView from '@/components/movie-view/MovieView';
import { useFetch } from '@/hooks/useFetch'
import React from 'react'
import HomeSwiper from '@/components/swiper/Swiper';
import CardSwiper from '@/components/card-swiper/CardSwiper';
import HeroSwiperSkeleton from '@/components/skeleton/hero-swiper-skeleton/HeroSwiperSkeleton';

const Home = () => {
  const {data,error,loading} = useFetch("/discover/movie", {without_genres: "18,10749,36"})
  const {
    data: cardSwiperData,
    loading: cardSwiperLoading,
    error: cardSwiperError
  } = useFetch("/discover/movie", { page: 30, without_genres: "18,10749,36" });

  
  return (
    <div>
      {loading ? (
        <>
          <HeroSwiperSkeleton />
        </>
      ) : (
        <>
          <HomeSwiper movies={data?.results} />
          <CardSwiper movies={cardSwiperData?.results} />
        </>
      )}
          </div>
        )
      }

export default React.memo(Home)
