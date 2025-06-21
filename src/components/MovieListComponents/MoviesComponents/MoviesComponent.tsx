import React, {FC} from 'react';
import {getAllMovies} from "@/service/getMovie.service";
import MovieComponent from "@/components/MovieListComponents/MovieComponents/MovieComponent";
import './Movies.css'
 type TypeProps = {
    type: 'popular' | 'upcoming' | 'top_rated'
}

const MoviesComponent:FC<TypeProps> = async ({type}) => {

   const movies = await getAllMovies(type);



    return (
        <div className={'movie-container'}>
            {movies.map(movie => <MovieComponent  key={movie.id} movie={movie} />)}

        </div>
    );
};

export default MoviesComponent;