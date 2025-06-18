import React, {FC} from 'react';
import {getMovieByID} from "@/service/api.service";
import DetailsInfoComponent from "@/components/Details-Info-Copmonents/DetailsInfoComponent";

type ParamsPropsType = {
    params:{id:string}
}

const UpcomingDetailsPage:FC<ParamsPropsType> =async ({params}) => {

    const movie = await getMovieByID(params.id);

    return (
        <div>
            <DetailsInfoComponent movie={movie}/>
        </div>
    );
};

export default UpcomingDetailsPage;