import React, {FC} from 'react';
import {getMovieByGenre} from "@/service/api.service";
import MovieComponent from "@/components/MovieListComponents/MovieComponents/MovieComponent";


type ParamsPropsType ={
    params:{id:string}
}

const GenrePage: FC<ParamsPropsType> = async ({params}) => {

   const genreId = +params.id
    const movies = await getMovieByGenre(genreId);

    return (
        <div>
            {movies.map(movie => < MovieComponent key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default GenrePage;