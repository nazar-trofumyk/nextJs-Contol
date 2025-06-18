import React, {FC} from 'react';
import DetailsInfoComponent from "@/components/DetailsInfoCopmonents/DetailsInfoComponent";
import {getMovieByID} from "@/service/api.service";


type Props = {
    params: {id:string}
}
const Page:FC<Props> = async ({params}) => {

  const movie = await getMovieByID(params.id);

    return (
        <div>
            {<DetailsInfoComponent movie={movie} />}
        </div>
    );
};

export default Page;