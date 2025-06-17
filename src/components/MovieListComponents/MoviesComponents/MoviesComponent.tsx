import React, {FC} from 'react';
import {getAllMovies} from "@/service/api.service";
import MovieComponent from "@/components/MovieListComponents/MovieComponents/MovieComponent";

type TypeProps = {
    type: 'popular' | 'upcoming' | 'top_rated'
}

const MoviesComponent:FC<TypeProps> = async ({type}) => {

   const movies = await getAllMovies(type);



    return (
        <div>
            {movies.map(movie => <MovieComponent ke movie={movie}/>)}

        </div>
    );
};

export default MoviesComponent;