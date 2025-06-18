import React, {FC} from 'react';
import DetailsInfoComponent from "@/components/Details-Info-Copmonents/DetailsInfoComponent";
import {getMovieByID} from "@/service/api.service";


type ParamsPropsType = {
    params: {id:string}
}
const PopularDetailsPage:FC<ParamsPropsType> = async ({params}) => {

  const movie = await getMovieByID(params.id);

    return (
        <div>
            {<DetailsInfoComponent movie={movie} />}
        </div>
    );
};

export default PopularDetailsPage;