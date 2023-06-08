import React from "react";
import axios from "axios";

const Data = () => {
  const apiKey = "a2006311928939b35613c28405038c87";

  axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    .then((response) => {
     
      const movies = response.data.results;
      console.log(movies);
    })
    .catch((error) => {
    
      console.error("Error fetching movies:", error);
    });

  return <div></div>;
};

export default Data;
