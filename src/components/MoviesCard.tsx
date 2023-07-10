import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { colors, fontFamily, sizes } from "./modules/themes";

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
  // const [page, setPage] = useState(1);
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      //setLoading(true); // Set loading to true before making the API request

      try {
        const response = await axios.get(`${apiEndpoint}`); //&page=${page}  removed
        const moviesData = response.data.results.slice(0, 7);
        setMovies(moviesData);
       // setLoading(false); // Set loading to false after receiving the data
      } catch (error) {
        console.error("Error fetching movies:", error);
        //setLoading(false); // Set loading to false in case of an error
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

  // const nextPage = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };

  // const prevPage = () => {
  //   setPage((prevPage) => prevPage - 1);
  // };

  return (
    <MovieWrapper>
      <div className="titleCard">
      <h1>
        {categoryName} <span>{subName}</span>
      </h1>
      </div>
    
      <div className="movieCard">
        {movies.map((movie) => {
          // Calculate the percentage
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
        {/* <div className="btns">
          <button onClick={prevPage}>⬅ Previous</button>
          <button onClick={nextPage}>Next ➡</button>
        </div> */}
      </div>
    </MovieWrapper>
  );
};

export default Data;

const MovieWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${sizes.large};
  flex-direction: column;
  box-shadow: 1px 1px 13px 2px #f3614010;
  border-radius: 10px;

  .titleCard{
    width: 100%;
 >

  h1 {
  margin: 10px 50px;
    font-family: ${fontFamily.Acme};
    >span{
      font-size: ${sizes.medium};
      font-family: ${fontFamily.roboto};
      font-weight: 400;
    }
  }
}

  .movieCard {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .movie {
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .movieImg {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    > img {
      border-radius: 10px;
      border-bottom-right-radius: 22px;
      box-shadow: 1px 1px 10px 1px #000000;
    }
    > span {
      border: none;
      height: 35px;
      width: 35px;
      border-radius: 360px;
      background: #f36140;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      color: #ffffff;
      padding: 5px;
      font-weight: bold;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
  }

  .movieInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > h4 {
      margin-bottom: 0;
      width: 230px;
    }
    > p {
      margin: 8px 5px;
      color: gray;
    }
  }

  .btns {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 2rem;
    > button {
      border: none;
      height: 30px;
      width: 100px;
      border-radius: 5px;
      background: ${colors.appOrange};
      color: white;
      font-weight: bolder;
      cursor: pointer;
    }
  }
`;

// const LoadingOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.5);
//   color: #ffffff;
//   font-weight: bold;
//   font-size: 24px;
//   z-index: 9999;
// `;
