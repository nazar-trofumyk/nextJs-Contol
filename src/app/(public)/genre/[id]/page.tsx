import React, {FC} from 'react';

import MovieComponent from "@/components/Movie-List-Components/MovieComponents/MovieComponent";
import {getGenres, getMovieByGenre} from "@/service/getGenres.service";
import PaginationComponent from "@/components/Pagination/PaginationComponent";
import {Metadata} from "next";
import './genre-container.css'


type ParamsPropsType ={
    params:{id:string}
    searchParams:{page?:string}
}


export const generateMetadata = async ({params}:ParamsPropsType):Promise<Metadata> => {

    const genres = await getGenres();
const genre =  genres.find(item => item.id === +params.id)
return {
    title:`${genre?.name} Movies`
}
}

const GenrePage: FC<ParamsPropsType> = async ({params,searchParams}) => {

    const page = searchParams.page ? parseInt(searchParams.page):1
    const movies = await getMovieByGenre(params.id,page);

    return (
        <div className={'genre-movie-container'}>
            {movies.map(movie => < MovieComponent key={movie.id} movie={movie}/>)}
            <PaginationComponent currentPage={page} basePath={`/genre/${params.id}`}/>
        </div>
    );
};

export default GenrePage;