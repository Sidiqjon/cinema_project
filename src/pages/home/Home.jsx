import MovieView from '@/components/movie-view/MovieView';
import { useFetch } from '@/hooks/useFetch'
import React from 'react'
import HomeSwiper from '@/components/swiper/Swiper';
import CardSwiper from '@/components/card-swiper/CardSwiper';
import HeroSwiperSkeleton from '@/components/skeleton/hero-swiper-skeleton/HeroSwiperSkeleton';
import CardSwiperSkeleton from '@/components/skeleton/card-swiper-skeleton/CardSwiperSkeleton';

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
          <CardSwiperSkeleton count={4} />
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
