import React, {FC} from 'react';
import {getMovieByID} from "@/service/getMovie.service";
import DetailsInfoComponent from "@/components/Details-Info-Copmonents/DetailsInfoComponent";

type ParamsPropsType = {
    params:{id:string}
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