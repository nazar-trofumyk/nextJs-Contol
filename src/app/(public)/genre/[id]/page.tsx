import React, {FC} from 'react';

import MovieComponent from "@/components/MovieListComponents/MovieComponents/MovieComponent";
import {getMovieByGenre} from "@/service/getGenres.service";


type ParamsPropsType ={
    params:{id:string}
}

const GenrePage: FC<ParamsPropsType> = async ({params}) => {

const movies = await getMovieByGenre(+params.id);
    return (
        <div className={'movie-container'}>
            {movies.map(movie => < MovieComponent key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default GenrePage;