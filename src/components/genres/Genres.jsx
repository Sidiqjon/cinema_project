import { useFetch } from "@/hooks/useFetch";
import React from "react";
import "./style.css";

const Genres = ({ handleChangeGenre, genres }) => {
  const { data } = useFetch("/genre/movie/list");

  const array = genres.split("-").slice(1);
  return (
    <div className="container mx-auto py-4 flex gap-2 overflow-auto mb-3 no-scrollbar genre-scroll">
      {data?.genres?.map((genre) => (
        <div
          onClick={() => handleChangeGenre(genre.id.toString())}
          className={`${
            array.includes(genre.id.toString()) ? "bg-primary text-white" : "bg-[#111111] text-white"
          } text-nowrap cursor-pointer select-none px-8 py-3 rounded-[12px]`}
          key={genre.id}
        >
          {genre.name}
        </div>
      ))}
    </div>
  );
};

export default Genres;
