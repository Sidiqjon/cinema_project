import MovieView from "@/components/movie-view/MovieView";
import { useFetch } from "@/hooks/useFetch";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Skeleton from "@/components/skeleton/Skeleton";

const Search = () => {
  const [query, setQuery] = useState("");
  const { data, loading } = useFetch(`/search/movie?query=${query}`, { without_genres: "18,10749,36" });

   return (
      <div>
         <div className="container mx-auto flex flex-col gap-[100px] items-center my-12">
            <div className="lg:w-[400px] md:w-[400px] w-[330px] flex px-5 bg-[#1D1D1D] gap-3 rounded-[12px] items-center">
               <IoSearch className="text-2xl text-primary " />
               <input value={query} onChange={(e) => setQuery(e.target.value)} required className="text-[#fff] w-full h-full lg:py-5 md:py-5 py-4  outline-none" type="text" placeholder="Movie titles..." />
            </div>
            {data?.results?.length > 0 ? (
               loading ? (
                  <Skeleton count={8} />
               ) : (
                  <div>
                     <MovieView movies={data?.results} />
                  </div>
               )
            ) : (
               <div className="text-center flex flex-col gap-20 text-[#4D4D4D]">
                  <p>The page is empty for now!</p>
                  <p>No results found for your query!</p>
               </div>
            )}
         </div>
      </div>
   );
};

export default Search;
