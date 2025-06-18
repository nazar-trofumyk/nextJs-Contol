import React from 'react';
import MoviesComponent from "@/components/MovieListComponents/MoviesComponents/MoviesComponent";

const UpcomingPage = () => {
    return (
        <div>
            <MoviesComponent type={'upcoming'}/>
        </div>
    );
};

export default UpcomingPage;