import React from 'react';

import GenreComponent from "@/components/Genre/GenreComponent/GenreComponent";
import {getGenres} from "@/service/getGenres.service";
import './Genres.css'
const GenresComponents =async () => {

    const genres = await getGenres();

    return (
        <div className={'block-for-list'}>
        <h2 className={'title-genres'}>Movie Genres</h2>
        <ul className={'genre-list'}>
            {genres.map(genre =><GenreComponent genre={genre} key={genre.id}/>)}
        </ul>
        </div>
    );
};

export default GenresComponents;