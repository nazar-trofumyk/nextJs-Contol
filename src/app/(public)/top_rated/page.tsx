import React from 'react';
import MoviesComponent from "@/components/MovieListComponents/MoviesComponents/MoviesComponent";

const TopRatedMoviePage = () => {
    return (
        <div>
            TOP
            <MoviesComponent type={'top_rated'}/>
        </div>
    );
};

export default TopRatedMoviePage;