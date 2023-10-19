import React from 'react'
import { useState, useEffect } from 'react'
import MovieCard from '../components/movieCard/MovieCard';
const moviesURL = import.meta.env.VITE_API;
const apiKEY = import.meta.env.VITE_API_KEY;
const VITE_IMG = import.meta.env.VITE_IMG;

const Home = () => {
    const [topMovies, setTopMovies] = useState([])
    const getTopRatedMovies = async(url) =>{
        const res = await fetch(url)
        const data = await res.json()
        setTopMovies(data.results)
        console.log(topMovies)
    }

    useEffect(()=>{
        const topRatedUrl=`${moviesURL}top_rated?${apiKEY}`;
        getTopRatedMovies(topRatedUrl)
        console.log(topRatedUrl)
    },[])

  return (
    <section className='section'>
      <h3>Filmes</h3>
      <div className='moviesSection'>
      {topMovies.map((movie,index)=>{
        return(
          <MovieCard key={movie.id} title={movie.title} id={movie.id} image={VITE_IMG + movie.poster_path} data={movie.overview} rate={movie.vote_average} button></MovieCard>
        )
      })}
      </div>
    </section>
  )
}

export default Home