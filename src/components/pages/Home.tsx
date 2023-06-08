import React from 'react'
import MoviesCard from '../../MoviesCard'


const Home = () => {
    const apiKey = "a2006311928939b35613c28405038c87";
  return (
    <>
     
      <MoviesCard apiEndpoint={`https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`}/>
      <MoviesCard apiEndpoint={`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`}/>
      <MoviesCard apiEndpoint={`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`}/>
    </>
  )
}

export default Home
