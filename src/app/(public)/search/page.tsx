import React, {FC} from 'react';

import MovieComponent from "@/components/MovieListComponents/MovieComponents/MovieComponent";
import {searchMovie} from "@/service/searchMovie.service";

type SearchPropsType = {
    searchParams:{query:string}
}

const SearchPage:FC<SearchPropsType> = async ({searchParams}) => {

 const movies = await searchMovie(searchParams.query);
    return (
        <div className={'movie-container'}>
            {movies.map(movie => <MovieComponent key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default SearchPage;