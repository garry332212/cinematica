import React from "react";
import { HomeContainer } from "../CSS/styles.modules";
import {
  apiKey,
  popular,
  top_rated_movies,
  trending,
  trendingShows,
  upcoming,
  top_rated_shows,
} from "../modules/ApiLinks";

import RenderMoviesShows from "../RenderMoviesShows";

//*Helper Function Types
export interface ItemsCategory {
  apiEndpoint: string;
  itemHeading: string;
  numberOfMovies: number;
  showButtons: boolean;
  tvShowOn: boolean;
  moviesOn: boolean;
}

//*Helper Function
export const createDisplayItems = (
  apiEndpoint: string,
  itemHeading: string,
  tvShowOn: boolean, // New argument for TV shows
  showButtons: boolean // New argument for showButtons
): ItemsCategory => ({
  apiEndpoint: `${apiEndpoint}?api_key=${apiKey}`,
  itemHeading,
  numberOfMovies: 16,
  showButtons,
  tvShowOn, // Assign the tvShowOn argument to the object property
  moviesOn: !tvShowOn, // Calculate the moviesOn property based on tvShowOn
});

//control what to display in RenderMoviesShow component when called in Home.tsx
const displayCategories: ItemsCategory[] = [
  createDisplayItems(trending, "Trending", false, false),
  createDisplayItems(upcoming, "Upcoming Movies", false, false),
  createDisplayItems(popular, "Popular", false, false),
  createDisplayItems(top_rated_movies, "Top Rated Movies", false, false),
  createDisplayItems(trendingShows, "Trending Shows", true, false),
  createDisplayItems(top_rated_shows, "Top Rated Shows", true, false),
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

  //RenderMoviesShows props values for Home
  const coverImageProps = {
    headerImage: headerImage,
    showHeaderImage:true,
    showSearch: true,
    title: "Welcome to Cinematica",
    description:
      " Explore the World of Cinema: Movie and TV Show Insights at You Fingertips.",
    catchyPhrase:
      "All You Need to Know about Movies and TV Shows: A Comprehensive Resource",
  };
  return (
    <HomeContainer>
      <RenderMoviesShows
        displayCategories={displayCategories}
        {...coverImageProps}
      />
    </HomeContainer>
  );
};

export default Home;
