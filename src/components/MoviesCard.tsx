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
  categoryName?: string;
  subName?: string;
  numberOfMovies: number;
  showButtons?: boolean;
  movieHeading: string;
}

const Data: React.FC<DataProps> = ({
  apiEndpoint,
  categoryName,
  subName,
  numberOfMovies,
  showButtons = true,
  movieHeading,
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${apiEndpoint}`, {
          params: {
            page: currentPage,
          },
        });

        const { results, total_pages } = response.data;
        setMovies(results.slice(0, numberOfMovies));
        setTotalPages(total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [apiEndpoint, currentPage, numberOfMovies]);

  const nextMoviesPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((nextPage) => nextPage + 1);
    }
  };

  const prevMoviesPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

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
      <div className="movieHeading">
        <h1>{movieHeading}</h1>
      </div>
      <div className="movieCard">
        {movies.map((movie) => {
          const percentage = (movie.vote_average / 10) * 100;

          return (
            <div className="movie" key={movie.id}>
              <div className="movieImg">
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt="Not Found"
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
      {showButtons && ( // Check the showButtons prop to conditionally render the buttons
        <div className="buttons">
          {currentPage > 1 && (
            <button className="btnPrev" onClick={prevMoviesPage}>
              Back
            </button>
          )}
          <p>
            Page <b>{currentPage}</b>
          </p>
          {currentPage < totalPages && (
            <button className="btnNext" onClick={nextMoviesPage}>
              Next
            </button>
          )}
        </div>
      )}
    </MovieWrapper>
  );
};

export default Data;
