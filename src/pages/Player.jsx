import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaStar } from "react-icons/fa";

const Player = () => {
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });
  const { params } = useParams();

  //   console.log(params);

  const movie = new URLSearchParams(params);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movie.get("id")}/videos`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGRlZjI5NTdkYjU1ZDM2NGIyMzYyM2U1NDIxYWE1MyIsIm5iZiI6MTczNTA0OTQwNC44OTUsInN1YiI6IjY3NmFjMGJjNDVjYzU1ZmZiNzY0YmU5MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LRV__rLoTLg39zc80HpFKQ9UK1lSKTQ4DBFF4j_G2lg",
      },
    };

    axios
      .request(options)
      .then((res) => setApiData(res.data.results[res.data.results.length - 1]))
      .catch((err) => console.error(err));
  }, []);

  const truncate = (str, length) => {
    if (!str) {
      return "";
    }

    return str.length > length ? str.slice(0, length) + "..." : str;
  };

  return (
    <>
      <div className="h-[100vh] flex justify-center items-center pt-12">
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="pl-20 pb-20">
        <h1 className="text-3xl font-nsans-bold">{movie.get("title")}</h1>
        <div className="flex">
          <FaStar color="yellow" className="mt-1 mr-2"/>
          <p>{parseFloat(movie.get("vote_average")).toFixed(1)}</p>
        </div>

        <p className="text-gray-400 text-sm mt-5">
          {movie.get("release_date")}
        </p>
        <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
          {movie.get("overview")}
        </p>
      </div>
    </>
  );
};

export default Player;