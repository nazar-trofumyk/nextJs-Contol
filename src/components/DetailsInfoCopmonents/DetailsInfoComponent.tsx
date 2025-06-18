import React, {FC} from 'react';

import {IMovie} from "@/models/IMovie";
type MoviePropsType = {
    movie:IMovie
}

const DetailsInfoComponent:FC<MoviePropsType> =  ({movie}) => {


    return (
        <div>
            {movie.id} === {movie.title}
        </div>
    );
};

export default DetailsInfoComponent;