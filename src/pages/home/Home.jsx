import React, { useEffect } from "react";
import { useFetch } from "@/hooks/useFetch";
import MovieView from "@/components/movie-view/MovieView";

const Home = () => {

   const { data, error, loading } = useFetch("/discover/movie");

   return (
      <div>
         <MovieView movies={data?.results} />
      </div>
   )
};

export default React.memo(Home);
