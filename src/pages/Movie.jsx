import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import styles from './movie.css'
import MovieCard from '../components/movieCard/MovieCard';

const moviesURL = import.meta.env.VITE_API;
const apiKEY = import.meta.env.VITE_API_KEY;

function Movie() {
  const {id} = useParams()
  const [movie, setMovie] = useState(null)
  const Movies = async(url) =>{
    const res = await fetch(url)
    const data = await res.json()
    Movies(data)
    console.log(Movies)
 }
  
  return (
    <div>Movie</div>
  )
}

export default Movie