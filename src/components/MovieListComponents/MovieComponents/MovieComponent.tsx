import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import Link from "next/link";
import './Movie.css'



type MoviePropsType = {
    movie:IMovie
}


const MovieComponent:FC<MoviePropsType> = ({movie}) => {
    return (

            <Link className={'movie-card'} href={`/movie/${movie.id.toString()}`}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`poster of film ${movie.title}`}/>
            <h2 className={'movie-title'}>{movie.title}</h2>
            </Link>

    );
};

export default MovieComponent;