import React, { useState,useEffect } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';

const Movies =()=>{
    const [data,setData]=useState([])
        return ( 
            <ul className="movies">
                {movies.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} />
                    </li>
                ))}
            </ul>
        );
}
 
export default Movies;