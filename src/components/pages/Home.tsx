import MoviesCard from "../MoviesCard";
//import { styled } from "styled-components";
import {
  apiKey,
  popular,
  this_week,
  top_rated_movies,
  trending,
  upcoming,
} from "../modules/ApiLinks";

const Home = () => {
  return (
    <>
      <MoviesCard apiEndpoint={`${trending}?api_key=${apiKey}`} categoryName="Trending"/>
      <MoviesCard apiEndpoint={`${upcoming}?api_key=${apiKey}`} categoryName="Upcoming"/>
      <MoviesCard apiEndpoint={`${this_week}?api_key=${apiKey}`} categoryName="This Week"/>
      <MoviesCard apiEndpoint={`${popular}?api_key=${apiKey}`} categoryName="Popular Movies"/>
      <MoviesCard apiEndpoint={`${top_rated_movies}?api_key=${apiKey}`} categoryName="Top Rated Movies" subName="(All Time Hits)"/>
    </>
  );
};

export default Home;


