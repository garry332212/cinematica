import React, { useEffect, useState } from "react";
import axios from "axios";
import { MovieWrapper } from "./CSS/styles.modules";

interface TVShow {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[];
}

interface DataProps {
  apiEndpoint: string;
  categoryName?: string;
  subName?: string;
  numberOfMovies: number;
  showButtons?: boolean;
  showHeading: string;
}

const ShowCard: React.FC<DataProps> = ({
  apiEndpoint,
  categoryName,
  subName,
  numberOfMovies,
  showButtons = true,
  showHeading,
}) => {
  const [shows, setShows] = useState<TVShow[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(`${apiEndpoint}`, {
          params: {
            page: currentPage,
          },
        });

        const { results, total_pages } = response.data;
        setShows(results.slice(0, numberOfMovies));
        setTotalPages(total_pages);
      } catch (error) {
        console.error("Error fetching Shows:", error);
      }
    };

    fetchShows();
  }, [apiEndpoint, currentPage, numberOfMovies]);

  const nextShowsPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((nextPage) => nextPage + 1);
    }
  };

  const prevShowsPage = () => {
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
        <h1>{showHeading}</h1>
      </div>

      <div className="movieCard">
        {shows.map((shows) => {
          const percentage = (shows.vote_average / 10) * 100;

          return (
            <div className="movie" key={shows.id}>
              <div className="movieImg">
                <img
                  src={`https://image.tmdb.org/t/p/w200/${shows.poster_path}`}
                  alt="Not Found"
                />
                <span>{percentage.toFixed(0)}%</span>
              </div>

              <div className="movieInfo">
                <h4>{shows.name}</h4>
                <p>{getFormattedDate(shows.first_air_date)}</p>
              </div>
            </div>
          );
        })}
      </div>
      {showButtons && (
        <div className="buttons">
          {currentPage > 1 && (
            <button className="btnPrev" onClick={prevShowsPage}>
              Back
            </button>
          )}
          <p>
            Page <b>{currentPage}</b>
          </p>
          {currentPage < totalPages && (
            <button className="btnNext" onClick={nextShowsPage}>
              Next
            </button>
          )}
        </div>
      )}
    </MovieWrapper>
  );
};

export default ShowCard;
