import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard";
import {  Cover } from "../styles.modules"
import {
  apiKey,
  popular,
  this_week,
  top_rated_movies,
  trending,
  upcoming,
} from "../modules/ApiLinks";

const Home = () => {
  const [headerImage, setHeaderImage] = useState("");

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {
        const movies = data.results;
        const randomIndex = Math.floor(Math.random() * movies.length);
        const randomMovie = movies[randomIndex];

        if (randomMovie && randomMovie.backdrop_path) {
          const imageUrl = `https://image.tmdb.org/t/p/original${randomMovie.backdrop_path}`;
          setHeaderImage(imageUrl);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
    <Cover>
      <div className="coverText">
        <h1>Welcome</h1>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
      </div>
      
    <img src={headerImage} alt="" />
    </Cover>
   
      <MoviesCard apiEndpoint={`${trending}?api_key=${apiKey}`} categoryName="Trending"/>
      <MoviesCard apiEndpoint={`${upcoming}?api_key=${apiKey}`} categoryName="Upcoming"/>
      <MoviesCard apiEndpoint={`${this_week}?api_key=${apiKey}`} categoryName="This Week"/>
      <MoviesCard apiEndpoint={`${popular}?api_key=${apiKey}`} categoryName="Popular Movies"/>
      <MoviesCard apiEndpoint={`${top_rated_movies}?api_key=${apiKey}`} categoryName="Top Rated Movies" subName="(All Time Hits)"/>
    </>
  );
};

export default Home;


