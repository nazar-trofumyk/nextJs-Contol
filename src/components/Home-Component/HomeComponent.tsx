import React from 'react';
import {getAllMovies} from "@/service/getMovie.service";

const HomeComponent = async () => {
    await getAllMovies('popular')

    return (
        <main>

        </main>
    );
};

export default HomeComponent;