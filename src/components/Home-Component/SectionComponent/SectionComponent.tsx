import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import MovieComponent from "@/components/Movie-List-Components/MovieComponents/MovieComponent";
import './Section.css'
type SectionPropsType ={
    movies:IMovie[]
title:string
}

const SectionComponent:FC<SectionPropsType> = ({movies,title}) => {
    return (
        <section>
            <h2 className={'title-movie-type'}>{title}</h2>
            <div className={'box-in-section'}>
                {movies.map(movie => <MovieComponent key={movie.id} movie={movie}/>)}
            </div>
        </section>
    );
};

export default SectionComponent;