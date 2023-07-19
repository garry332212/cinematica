import React, { useEffect, useState } from "react";
import axios from "axios";
import { MovieWrapper } from "./CSS/styles.modules";

interface Movie {
  id: number;
  overview: string;
  title: string;
  poster_path: string;
  original_language: string;
  vote_average: number;
  release_date: string;
}

interface DataProps {
  apiEndpoint: string;
  categoryName: string;
  subName?: string;
}

const Data: React.FC<DataProps> = ({ apiEndpoint, categoryName, subName }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${apiEndpoint}`);
        const moviesData = response.data.results.slice(0, 8);
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [apiEndpoint]);

  function getFormattedDate(dateString: string | number | Date) {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
    } as Intl.DateTimeFormatOptions;
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <MovieWrapper>
      <div className="titleCard">
        <h1>
          {categoryName} <span>{subName}</span>
        </h1>
      </div>

      <div className="movieCard">
        {movies.map((movie) => {
          const percentage = (movie.vote_average / 10) * 100;
          return (
            <div className="movie" key={movie.id}>
              <div className="movieImg">
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt=""
                />
                <span>{percentage.toFixed(0)}%</span>
              </div>

              <div className="movieInfo">
                <h4>{movie.title}</h4>
                <p>{getFormattedDate(movie.release_date)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </MovieWrapper>
  );
};

export default Data;
