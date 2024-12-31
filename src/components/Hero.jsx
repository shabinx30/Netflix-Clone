import { useEffect, useState } from "react";
import axios from "axios";
import endpoints, { createImageUrl } from "../services/movieServices";
import { useNavigate } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";

const Hero = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios.get(endpoints.popular).then((response) => {
      const movies = response.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];

      setMovie(randomMovie);
    });
  }, []);

  const truncate = (str, length) => {
    if (!str) {
      return "";
    }

    return str.length > length ? str.slice(0, length) + "..." : str;
  };

  if (!movie) {
    return (
      <>
        <p>fetching the movies...</p>
      </>
    );
  }

  const { title, backdrop_path, release_date, overview } = movie;

  const params = new URLSearchParams(movie).toString();
  const navigate = useNavigate();

  return (
    <div className="w-full h-[550px] lg:h-[850px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] lg:h-[850px] bg-gradient-to-r from-black opacity-80" />
        <img
          className="w-full h-full object-cover object-top"
          src={createImageUrl(backdrop_path, "original")}
          alt={title}
        />

        <div className="absolute w-full top-[20%] lg:top-[45%] p-4 md:p-8">
          <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1>
          <div className="mt-8 mb-4">
            <button onClick={() => navigate(`/player/${params}`)} className="relative pl-8 border bg-gray-300 text-black py-2 px-3 hover:bg-red-600 hover:text-white hover:border-gray-800 duration-300">
              <FaPlay size={15} className="absolute top-3 left-3"/>
              Play
            </button>
            <button className="relative pl-9 border border-gray-300 py-2 px-3 ml-4 hover:bg-gray-300 hover:text-black duration-300">
              <MdOutlineWatchLater size={20} className="absolute top-2.5 left-3"/>
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">{release_date}</p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncate(overview, 165)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
