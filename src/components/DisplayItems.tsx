import React, { useEffect, useState } from "react";
import axios from "axios";
import { MovieWrapper } from "./CSS/styles.modules";
import CircularProgress from "@mui/material/CircularProgress";

interface Movie {
  id: number;
  overview: string;
  title: string;
  poster_path: string;
  original_language: string;
  vote_average: number;
  release_date: string;

  //*below for the tv shows
  name: string;
  first_air_date: string;
}

interface DataProps {
  apiEndpoint: string;
  numberOfMovies: number;
  showButtons: boolean;
  tvShowOn: boolean;
  moviesOn: boolean;
  itemHeading: string;
}

const Data: React.FC<DataProps> = ({
  apiEndpoint,
  numberOfMovies,
  showButtons,
  tvShowOn,
  moviesOn,
  itemHeading,
}) => {
  const [showItems, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  //* pagination from the API
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
        setTimeout(() => {
          setLoading(true);
        }, 1000);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [apiEndpoint, currentPage, numberOfMovies]);

  const nextItemsPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((nextPage) => nextPage + 1);
    }
  };

  const prevItemsPage = () => {
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
      {!loading ? (
        <div className="loadingOverlay">
          <CircularProgress size={70} color="warning"/>
          <p>Loading</p>
        </div>
      ) : (
        <>
          <div className="movieHeading">
            <h1>{itemHeading}</h1>
          </div>
          <div className="movieCard">
            {showItems.map((items) => {
              const percentage = (items.vote_average / 10) * 100;

              return (
                <div className="movie" key={items.id}>
                  <div className="movieImg">
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${items.poster_path}`}
                      alt="Not Found"
                    />
                    <span>{percentage.toFixed(0)}%</span>
                  </div>

                  <div className="movieInfo">
                    {moviesOn && (
                      <>
                        <h4>{items.title}</h4>
                        <p>{getFormattedDate(items.release_date)}</p>
                      </>
                    )}

                    {tvShowOn && (
                      <>
                        <h4>{items.name}</h4>
                        <p>{getFormattedDate(items.first_air_date)}</p>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {showButtons && (
            <div className="buttons">
              {currentPage > 1 && (
                <button className="btnPrev" onClick={prevItemsPage}>
                  Back
                </button>
              )}
              <p>
                Page <b>{currentPage}</b>
              </p>
              {currentPage < totalPages && (
                <button className="btnNext" onClick={nextItemsPage}>
                  Next
                </button>
              )}
            </div>
          )}
        </>
      )}
    </MovieWrapper>
  );
};

export default Data;
