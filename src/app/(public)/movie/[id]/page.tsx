import React, {FC} from 'react';
import {getMovieByID} from "@/service/getMovie.service";
import DetailsInfoComponent from "@/components/Movie-Details-Component/DetailsInfoComponent";
import {Metadata} from "next";

type ParamsPropsType = {
    params:{id:string}
}

export const generateMetadata = async ({params}:ParamsPropsType):Promise<Metadata> => {
   const movie = await getMovieByID(params.id)
return {
        title: movie.title  + ' Movie Details'
}
}

const MovieDetailsPage:FC<ParamsPropsType> =async ({params}) => {

    const movie = await getMovieByID(params.id);

    return (
        <div>
            <DetailsInfoComponent movie={movie}/>
        </div>
    );
};

export default MovieDetailsPage;