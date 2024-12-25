import React from "react";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import endpoints from "../services/movieServices";

const Home = () => {
  return <>
    <Hero/>
    <MovieRow title='Upcoming' url={endpoints.upcoming} />
    <MovieRow title='Trending Now' url={endpoints.trending} />
    <MovieRow title='Popular' url={endpoints.popular} />
    <MovieRow title='Top Rated' url={endpoints.topRated} />
    <MovieRow title='Comedy' url={endpoints.comedy} />
  </>
};

export default Home;
