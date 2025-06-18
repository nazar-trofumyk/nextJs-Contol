import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import Link from "next/link";
import './Movie.css'



type MoviePropsType = {
    movie:IMovie
    type: 'popular' | 'upcoming' | 'top_rated'
}


const MovieComponent:FC<MoviePropsType> = ({movie,type}) => {
    return (

            <Link className={'movie-card'} href={`/${type}/${movie.id.toString()}`}>
            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`poster of film ${movie.title}`}/>
            <h2 className={'movie-title'}>{movie.title}</h2>
            </Link>

    );
};

export default MovieComponent;