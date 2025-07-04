import React, {FC} from 'react';
import './search-container.css'
import MovieComponent from "@/components/Movie-List-Components/MovieComponents/MovieComponent";
import {searchMovie} from "@/service/searchMovie.service";

type SearchPropsType = {
    searchParams:{query:string}
}

const SearchPage:FC<SearchPropsType> = async ({searchParams}) => {

 const movies = await searchMovie(searchParams.query);
    return (
        <div className={'search-movie-container'}>
            {movies.map(movie => <MovieComponent key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default SearchPage;