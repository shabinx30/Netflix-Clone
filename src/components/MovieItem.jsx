import React, { useState } from "react";
import { createImageUrl } from "../services/movieServices";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const MovieItem = ({ movie }) => {
  const [fav, setFav] = useState(false);

  const { title, backdrop_path, poster_path } = movie;

  return (
    <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2">
      <img
        className="w-full h-40 block object-cover object-top"
        src={createImageUrl(backdrop_path ?? poster_path, "w500")}
        alt={title}
      />

      <div className="absolute top-0 left-0 w-full h-40 bg-black/75 opacity-0 hover:opacity-100">
        <p className="w-44 mt-3 ml-3 whitespace-normal font-nsans-medium">
          {movie.title}
        </p>

        <p>
          {fav ? (
            <FaHeart
              size={20}
              className="absolute top-3 right-3 text-gray-300"
            />
          ) : (
            <FaRegHeart
              size={20}
              className="absolute top-3 right-3 text-gray-300"
            />
          )}
        </p>
      </div>
    </div>
  );
};

export default MovieItem;
