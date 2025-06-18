import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import Link from "next/link";




type MoviePropsType = {
    movie:IMovie
    type: 'popular' | 'upcoming' | 'top_rated'
}


const MovieComponent:FC<MoviePropsType> = ({movie,type}) => {
    return (
        <div>

            <h2><Link href={`/${type}/${movie.id.toString()}`}>{movie.title}</Link></h2>
        </div>
    );
};

export default MovieComponent;