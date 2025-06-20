import React, {FC} from 'react';
import {searchMovie} from "@/service/api.service";
import MovieComponent from "@/components/MovieListComponents/MovieComponents/MovieComponent";

type SearchPropsType = {
    searchParams:{query:string}
}

const SearchPage:FC<SearchPropsType> = async ({searchParams}) => {

   const movies = await searchMovie(searchParams.query);
    return (
        <div>
            {movies.map(movie => <MovieComponent key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default SearchPage;