import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import MovieComponent from "@/components/MovieListComponents/MovieComponents/MovieComponent";
import './Section.css'
type SectionPropsType ={
    movies:IMovie[]
title:string
}

const SectionComponent:FC<SectionPropsType> = ({movies,title}) => {
    return (
        <section>
            <h2>{title}</h2>
            <div className={'box-in-section'}>
                {movies.map(movie => <MovieComponent key={movie.id} movie={movie}/>)}
            </div>
        </section>
    );
};

export default SectionComponent;