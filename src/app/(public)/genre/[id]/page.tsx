import React, {FC} from 'react';

import MovieComponent from "@/components/Movie-List-Components/MovieComponents/MovieComponent";
import {getMovieByGenre} from "@/service/getGenres.service";
import PaginationComponent from "@/components/Pagination/PaginationComponent";


type ParamsPropsType ={
    params:{id:string}
    searchParams:{page?:string}
}

const GenrePage: FC<ParamsPropsType> = async ({params,searchParams}) => {

    const page = searchParams.page ? parseInt(searchParams.page):1
    const movies = await getMovieByGenre(+params.id,page);

    return (
        <div className={'movie-container'}>
            {movies.map(movie => < MovieComponent key={movie.id} movie={movie}/>)}
            <PaginationComponent currentPage={page} basePath={`/genre/${params.id}`}/>
        </div>
    );
};

export default GenrePage;