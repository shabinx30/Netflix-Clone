import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { UserAuth } from "../context/authContext";
import { db } from "../services/firebase";
import { createImageUrl } from "../services/movieServices";
import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [movies, setMovies] = useState([]);
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "users", `${user.email}`), (doc) => {
        if (doc.data) setMovies(doc.data().favShows);
      });
    }
  }, [user?.email]);

  const slide = (offset) => {
    const slider = document.getElementById(`slider`);
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  console.log(movies);

  const handleUnlikeShow = async (movie) => {
    const userDoc = doc(db, "users", user.email);

    await updateDoc(userDoc, {
      favShows: arrayRemove(movie),
    });
  };

  if (!user) {
    return (
      <>
        <p>fetching shows...</p>
      </>
    );
  }

  return (
    <>
      <div className="mb-52">
        <div>
          <img
            className="block w-full h-[550px] object-cover"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg"
            alt=""
          />
          <div className="bg-black/50 fixed top-0 left-0 w-full h-[550px]" />
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-nsans-bold my-2">
              My Shows
            </h1>
            <p className="font-nsans-light text-gray-400 text-lg ">
              {user.email}
            </p>
            <button
              onClick={() => {
                logOut();
                navigate("/");
              }}
              className="bg-red-600 rounded-lg p-2 hover:bg-red-700 duration-300 mt-3"
            >
              Logout
            </button>
          </div>

          {/* movie row */}

          <div className="relative pr-20 pl-20">
            <h2 className="font-nsans-bold md:text-xl p-4">Favorite Shows</h2>
            <MdChevronLeft
              onClick={() => slide(-500)}
              size={27.5}
              className="bg-white/30 rounded-2xl h-20 top-32 absolute mt-12 left-10 opacity-80 text-white z-10 cursor-pointer"
            />
            <div className="relative flex items-center group">
              <div
                id={`slider`}
                className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
              >
                {movies.map((movie) => (
                  <div key={movie.id} className="relative w-[160px] sm:w-[200px] md:w-[200px] lg:[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2 ">
                    <img
                      className="w-full h-full "
                      src={createImageUrl(movie.poster_path ?? movie.backdrop_path, "w500")}
                      alt={movie.title}
                    />

                    <div
                      onClick={() =>
                        navigate(`/player/${new URLSearchParams(movie)}`)
                      }
                      className="absolute top-0 left-0 w-full h-full bg-black/75 opacity-0 hover:opacity-100 duration-200"
                    >
                      <p className="w-44 mt-3 ml-3 whitespace-normal font-nsans-medium">
                        {movie.title}
                      </p>

                      <p>
                        <AiOutlineClose
                          onClick={(e) => {
                            e.stopPropagation();
                            handleUnlikeShow(movie);
                          }}
                          size={20}
                          className="absolute top-3 right-3"
                        />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <MdChevronRight
              onClick={() => slide(500)}
              size={27.5}
              className="bg-white/30 rounded-2xl h-20 absolute top-44 bottom-0 right-10 opacity-80 text-white z-10 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
