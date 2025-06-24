import React from 'react';
import {getAllMovies} from "@/service/getMovie.service";
import SectionComponent from "@/components/Home-Component/SectionComponent/SectionComponent";
import './Main.css'
const MainComponent = async () => {

    const popularMovies = await getAllMovies('popular').then(movie =>movie.slice(0,5));
    const upcomingMovies = await getAllMovies('upcoming').then(movie =>movie.slice(0,5));
    const topMovies = await getAllMovies('top_rated').then(movie =>movie.slice(0,5));

    return (
        <main>
            <SectionComponent movies={popularMovies} title={"Popular Movies"}/>
            <SectionComponent movies={upcomingMovies} title={"Upcoming Movies"}/>
            <SectionComponent movies={topMovies} title={"Top Rated Movies"}/>
        </main>
    );
};

export default MainComponent;