import React, {FC} from 'react';
import {getAllMovies} from "@/service/api.service";

type TypeProps = {
    type: 'popular' | 'upcoming' | 'top_rated'
}

const MoviesComponent:FC<TypeProps> = async ({type}) => {

   const movies = await getAllMovies(type);



    return (
        <div>
            {movies.map(movie => <MovieComponents />)}

        </div>
    );
};

export default MoviesComponent;