import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";

type MoviePropsType = {

    movie:IMovie
}


const MovieComponent:FC<MoviePropsType> = ({movie}) => {
    return (
        <div>
            <img src={''}/>
            <h2>{movie.titlem}</h2>
        </div>
    );
};

export default MovieComponent;