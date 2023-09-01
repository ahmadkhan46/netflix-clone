import React, {useEffect, useState} from 'react'
import axios from './axios';
import './Row.css';

const base_url="https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}) {
  const [movies, setMovies]=useState([]);

// A snippet of code which runs based ona specific condition
  useEffect(()=>{
    async function fetchdata(){
      const request=await axios.get(fetchUrl)
      setMovies(request.data.results);
      return request;
    }
    fetchdata()
// if [], means runs once when the row loads, and do not run again
  },[fetchUrl]);

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters'>
          {movies?.map(
            (movie)=>
            ((isLargeRow &&  movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) &&(
           <img
           className={`row_poster ${isLargeRow && "row_posterLarge"}`}
           src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
           alt={movie.name}/>
          ))}
        </div>
    </div>
  )
}

export default Row