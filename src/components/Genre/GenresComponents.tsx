import React from 'react';
import {getGenres} from "@/service/api.service";
import GenreComponent from "@/components/Genre/GenreComponent";

const GenresComponents =async () => {

    const genres = await getGenres();

    return (
        <ul>
            {genres.map(genre =><GenreComponent genre={genre} key={genre.id}/>)}
        </ul>
    );
};

export default GenresComponents;