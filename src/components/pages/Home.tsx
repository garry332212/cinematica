import { useEffect, useState } from "react";
import MoviesCard from "../MoviesCard";
import { Cover, HomeContainer, SearchBar } from "../styles.modules";
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
    <HomeContainer>
      <Cover>
        <div className="coverText">
          <h1>Welcome to Cinematica</h1>
          <p>
            Explore the World of Cinema: Movie and TV Show Insights at Your
            Fingertips.
          </p>
          <em>
            "All You Need to Know about Movies and TV Shows: A Comprehensive
            Resource"
          </em>
        </div>

        <img src={headerImage} alt="" />
        <SearchBar>
          <input
            type="search"
            placeholder="Search for movies, Tv shows and more..."
          />
          <button>Search</button>
        </SearchBar>
      </Cover>

      <MoviesCard
        apiEndpoint={`${trending}?api_key=${apiKey}`}
        categoryName="Trending"
      />
      <MoviesCard
        apiEndpoint={`${upcoming}?api_key=${apiKey}`}
        categoryName="Upcoming"
      />
      <MoviesCard
        apiEndpoint={`${this_week}?api_key=${apiKey}`}
        categoryName="This Week"
      />
      <MoviesCard
        apiEndpoint={`${popular}?api_key=${apiKey}`}
        categoryName="Popular Movies"
      />
      <MoviesCard
        apiEndpoint={`${top_rated_movies}?api_key=${apiKey}`}
        categoryName="Top Rated Movies"
        subName="(All Time Hits)"
      />
    </HomeContainer>
  );
};

export default Home;
