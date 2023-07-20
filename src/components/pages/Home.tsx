import MoviesCard from "../MoviesCard";
import React from "react";
import { HomeContainer } from "../CSS/styles.modules";
import {
  apiKey,
  popular,
  top_rated_movies,
  trending,
  trendingShows,
  upcoming,
} from "../modules/ApiLinks";

import CommonStyles from "../CommonStyles";

//*Helper Function Types
interface MovieCategory {
  apiEndpoint: string;
  movieHeading: string;
  numberOfMovies: number;
  showButtons: boolean;
}

//*Helper Function
const createMoviesCard = (
  apiEndpoint: string,
  movieHeading: string
): MovieCategory => ({
  apiEndpoint: `${apiEndpoint}?api_key=${apiKey}`,
  movieHeading,
  numberOfMovies: 16,
  showButtons: false,
});

const movieCategories: MovieCategory[] = [
  createMoviesCard(trending, "Trending"),
  createMoviesCard(upcoming, "Upcoming Movies"),
  createMoviesCard(popular, "Popular"),
  createMoviesCard(top_rated_movies, "Top Rated Movies"),
];

const Home = () => {
  const [headerImage, setHeaderImage] = React.useState("");

  //fetch the random images from the endpoint
  React.useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
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
    <HomeContainer>
      <CommonStyles
        headerImage={headerImage}
        title={"Welcome to Cinematica"}
        description=" Explore the World of Cinema: Movie and TV Show Insights at Your
        Fingertips."
        catchyPhrase="All You Need to Know about Movies and TV Shows: A Comprehensive Resource"
        moviesCardComponent={movieCategories.map((category) => (
          <MoviesCard key={category.movieHeading} {...category} />
        ))}
      />
    </HomeContainer>
  );
};

export default Home;
