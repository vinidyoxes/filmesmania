import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MovieCard from '../components/movieCard/MovieCard';

const moviesURL = import.meta.env.VITE_API;
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

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
    console.log(topMovies);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKEY}`;
    getTopRatedMovies(topRatedUrl);
    console.log(topRatedUrl);
  }, []);

  return (
    <motion.section className="section" variants={containerVariants} initial="hidden" animate="visible">
      <h3>Filmes</h3>
      <motion.div className="moviesSection" variants={containerVariants}>
        {topMovies.map((movie, index) => (
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

export default Home;
