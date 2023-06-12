import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import axios from 'axios';

interface Movie {
  backdrop_path: any;
  id: number;
  overview: string;
  title: string;
  poster_path: string;
  original_language: string;
  vote_average: number;
  release_date: string;
}

interface MovieContextProps {
  movies: Movie[];
  loading: boolean;
}

const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export const MovieProvider: React.FC<{ apiEndpoint: string; children: ReactNode }> = ({apiEndpoint, children }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const apiKey = "a2006311928939b35613c28405038c87";

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${apiEndpoint}?api_key=${apiKey}`);
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, [apiEndpoint]);

  return (
    <MovieContext.Provider value={{ movies, loading }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error('useMovieContext must be used within a MovieProvider');
  }
  return context;
};
