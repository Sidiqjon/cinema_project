import MovieView from "@/components/movie-view/MovieView";
import { useFetch } from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Skeleton from "@/components/skeleton/Skeleton";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";
import { TbFileSad } from "react-icons/tb";

const Search = () => {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get("query") || "");
  const page = params.get("page") || 1;

  const { data, loading } = useFetch(`/search/movie?query=${query}`, {
    page,
    without_genres: "18,10749,36",
  });

  const handleChange = (_, value) => {
    if (value === 1) {
      params.delete("page");
    } else {
      params.set("page", value.toString());
    }
    setParams(params);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (!value.trim()) {
      params.delete("query");
      params.delete("page");
    } else {
      params.set("query", value);
      params.set("page", "1");
    }
    setParams(params);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page, query]);

  return (
    <div>
      <div className="container mx-auto flex flex-col gap-[100px] items-center my-12">
        <div className="lg:w-[400px] md:w-[400px] w-[330px] flex px-5 bg-[#1D1D1D] gap-3 rounded-[12px] items-center">
          <IoSearch className="text-2xl text-primary " />
          <input
            value={query}
            onChange={handleInputChange}
            required
            className="text-[#fff] w-full h-full lg:py-5 md:py-5 py-4  outline-none"
            type="text"
            placeholder="Movie titles..."
          />
        </div>
        {data?.results?.length > 0 ? (
          loading ? (
            <Skeleton count={8} />
          ) : (
            <div>
              <MovieView movies={data?.results} />
              {data?.total_pages > 1 && (
                <div className="container mx-auto flex justify-center my-10">
                  <Pagination
                    count={data?.total_pages > 500 ? 500 : data?.total_pages}
                    page={Number(page)}
                    onChange={handleChange}
                    sx={{
                      "& .MuiPaginationItem-root": {
                        color: "#c61f1f",
                        margin: {
                          xs: "2px",
                          sm: "4px",
                          md: "6px",
                        },
                        minWidth: {
                          xs: 28,
                          sm: 32,
                          md: 36,
                        },
                        height: {
                          xs: 28,
                          sm: 32,
                          md: 36,
                        },
                        fontSize: {
                          xs: "0.75rem",
                          sm: "0.875rem",
                        },
                      },
                      "& .MuiPaginationItem-root.Mui-selected": {
                        backgroundColor: "#c61f1f",
                        color: "white",
                      },
                      "& .MuiPaginationItem-root:hover": {
                        backgroundColor: "rgba(255,255,255,0.1)",
                      },
                      "& .MuiPaginationItem-root.Mui-selected:hover": {
                        backgroundColor: "rgba(250, 31, 31, 0.5)",
                      },
                    }}
                  />
                </div>
              )}
            </div>
          )
        ) : (
          <div className="text-center flex flex-col gap-20 text-[#4D4D4D]">
            <p>The page is empty for now!</p>
            <p className="flex flex-col gap-2 items-center justify-center">No results found for your query!<TbFileSad className="text-4xl"/></p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
