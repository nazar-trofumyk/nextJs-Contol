import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";


type SearchParamsPropsType ={
    searchParams:Promise<SearchParams>
}

const DetailsPage:FC<SearchParamsPropsType> =async ({searchParams}) => {

    const {data} = await searchParams;
    console.log(data)

    return (
        <div>
          Hello
        </div>
    );
};

export default DetailsPage;