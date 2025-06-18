import React, {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {transformParse} from "@/helpers/helpers";
import {IMovie} from "@/models/IMovie";

type SearchParamsProps ={
    searchParams:Promise<SearchParams>
}

const PopularMoviesDetailsPage:FC<SearchParamsProps> = async ({searchParams}) => {

    const {data} = await searchParams;
    console.log(data)
    const parse = transformParse<IMovie>(data);
    return (
        <div>
            {parse?.popularity}
        </div>
    );
};

export default PopularMoviesDetailsPage;