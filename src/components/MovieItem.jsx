import React, { useState } from "react";
import { createImageUrl } from "../services/movieServices";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import {db} from "../services/firebase"
import { UserAuth } from "../context/authContext"
import { useNavigate } from "react-router-dom";

const MovieItem = ({ movie }) => {
  const [fav, setFav] = useState(false);

  const {user} = UserAuth()

  const navigate = useNavigate()

  // console.log(movie);
  


  const { title, backdrop_path, poster_path } = movie;

  const markFavShow = async () =>{
    const userEmail = user?.email;

    if(userEmail){
      const userDoc = doc(db, 'users', userEmail)
      setFav(!fav)
      updateDoc(userDoc, {
        favShows: arrayUnion({...movie}),
      })
    }else{
      alert("Login save a movie")
    }
  }

  const params = new URLSearchParams(movie).toString()

  return (
    <div className="relative w-[160px] sm:w-[200px] md:w-[200px] lg:[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2">
      <img
        className="w-full h-full"
        src={createImageUrl(poster_path ?? backdrop_path, "w500")}
        alt={title}
      />

      <div onClick={() => navigate(`/player/${params}`)} className="absolute top-0 left-0 w-full h-full bg-black/75 opacity-0 hover:opacity-100">
        <p className="w-44 mt-3 ml-3 whitespace-normal font-nsans-medium">
          {movie.title}
        </p>

        <p onClick={markFavShow} className="cursor-pointer">
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
