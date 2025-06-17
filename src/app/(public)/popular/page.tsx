import React from 'react';
import MoviesComponent from "@/components/MovieListComponents/MoviesComponents/MoviesComponent";

const PopularMoviePage = async () => {


    return (
        <div>
           Popular
            <MoviesComponent type={'popular'}/>
        </div>
    );
};

export default PopularMoviePage;