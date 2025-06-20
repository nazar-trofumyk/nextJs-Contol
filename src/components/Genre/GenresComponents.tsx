import React from 'react';
import {getGenres} from "@/service/api.service";

const GenresComponents =async () => {

    const genres = await getGenres();

    return (
        <div>
            {genres.map(genre =><GenreComponent/>)}
        </div>
    );
};

export default GenresComponents;