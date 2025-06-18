import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import Link from "next/link";



type MoviePropsType = {

    movie:IMovie
}


const MovieComponent:FC<MoviePropsType> = ({movie}) => {
    return (
        <div>
            <img src={''}/>
            <h2><Link href={{pathname:'/popular/' + movie.id.toString(), query:{data:JSON.stringify(movie)}}}>{movie.title}</Link></h2>
        </div>
    );
};

export default MovieComponent;