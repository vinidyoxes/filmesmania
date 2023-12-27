import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import MovieCard from '../components/movieCard/MovieCard';

const searchURL = import.meta.env.VITE_SEARCH;
const apiKEY = import.meta.env.VITE_API_KEY;
const VITE_IMG = import.meta.env.VITE_IMG;

const containerVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q');

  const [searchMovies, setSearchMovies] = useState([]);
  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setSearchMovies(data.results);
  };

  useEffect(() => {
    const searchWithQuery = `${searchURL}?${apiKEY}&query=${query}`;
    getSearchedMovies(searchWithQuery);
    console.log(searchMovies);
  }, [query]);

  return (
    <motion.section className="section" variants={containerVariants} initial="hidden" animate="visible">
      <h3>
        Resultado da Pesquisa: <span className="query-text">{query}</span>
      </h3>
      <motion.div className="moviesSection" variants={containerVariants}>
        {searchMovies.map((movie, index) => (
          <motion.div key={movie.id} className="item" variants={itemVariants}>
            <MovieCard
              title={movie.title}
              id={movie.id}
              image={VITE_IMG + movie.poster_path}
              data={movie.overview}
              rate={movie.vote_average}
              button
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Search;
