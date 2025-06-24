import React, {FC} from 'react';
import {getAllMovies} from "@/service/getMovie.service";
import MovieComponent from "@/components/Movie-List-Components/MovieComponents/MovieComponent";
import './Movies.css'
 type TypeProps = {
    type: 'popular' | 'upcoming' | 'top_rated'
     page?:number
}

const MoviesComponent:FC<TypeProps> = async ({type,page=1}) => {

   const movies = await getAllMovies(type,page);



    return (
        <div className={'movie-container'}>
            {movies.map(movie => <MovieComponent  key={movie.id} movie={movie} />)}

        </div>
    );
};

export default MoviesComponent;