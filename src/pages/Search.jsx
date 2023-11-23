import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieCard from '../components/movieCard/MovieCard';
const searchURL = import.meta.env.VITE_SEARCH;
const apiKEY = import.meta.env.VITE_API_KEY;
const VITE_IMG = import.meta.env.VITE_IMG;



const Search = () => {

  const [searchParams] = useSearchParams();
  const [movies, setMovies]=useState([])
  const query = searchParams.get('q');
  
  const [searchMovies, setSearchMovies] = useState([])
    const getSearchedMovies = async(url) =>{
        const res = await fetch(url)
        const data = await res.json()
        setSearchMovies(data.results)
    }
    useEffect(()=>{
      const searchWithQuery=`${searchURL}?${apiKEY}&query=${query}`;
      getSearchedMovies(searchWithQuery)
      console.log(searchMovies)

  },[query])

  return (
    <section className='section'>
      <h3>Resultado da Pesquisa: <span className="query-text">{query}</span></h3>
      <div className='moviesSection'>
      {searchMovies.map((movie,index)=>{
        return(
          <MovieCard key={movie.id} title={movie.title} id={movie.id} image={VITE_IMG + movie.poster_path} data={movie.overview} rate={movie.vote_average} button></MovieCard>
        )
      })}
      </div>
    </section>
  )
}

export default Search