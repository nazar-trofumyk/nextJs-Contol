import React from 'react';

import GenreComponent from "@/components/Genre/GenreComponent";
import {getGenres} from "@/service/getGenres.service";

const GenresComponents =async () => {

    const genres = await getGenres();

    return (
        <ul>
            {genres.map(genre =><GenreComponent genre={genre} key={genre.id}/>)}
        </ul>
    );
};

export default GenresComponents;