import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const MovieRow = ({ title, url }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // console.log(url);

    axios.get(url).then((response) => setMovies(response.data.results));

    // console.log(movies);
  }, [url]);

  const slide = (offset) => {
    const slider = document.getElementById(`slider${movies[0]?.id || ""}`);
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  return (
    <div className="pr-20 pl-20">
      <h2 className="font-nsans-bold md:text-xl p-4">{title}</h2>

      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={() => slide(-500)}
          size={40}
          className="bg-white rounded-full absolute left-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
        />
        <div
          id={`slider${movies[0]?.id || ""}`}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          onClick={() => slide(500)}
          size={40}
          className="bg-white rounded-full absolute right-2 opacity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
        />
      </div>
    </div>
  );
};

export default MovieRow;
