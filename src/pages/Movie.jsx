import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './movie.css'
import { MovieBanner } from '../components/MovieBanner/MovieBanner';

const moviesURL = import.meta.env.VITE_API;
const apiKEY = import.meta.env.VITE_API_KEY;
const VITE_BANNER = import.meta.env.VITE_BANNER;


function Movie() {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)
  const getMovie = async(url) =>{
    const res = await fetch(url)
    const data = await res.json()
    setMovie(data)
    console.log(movie)
 }
  
useEffect(() => {
  
  const movieURL = `${moviesURL}${id}?${apiKEY}`;
  getMovie(movieURL);
}, []);

  return (
    <div>
      {movie && <>
        <MovieBanner movie={movie} image={VITE_BANNER + movie.backdrop_path}></MovieBanner>
        <div >
          <div className='overview'>
            <h3>Story Line</h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      </>}
    </div>
  )
}

export default Movie 