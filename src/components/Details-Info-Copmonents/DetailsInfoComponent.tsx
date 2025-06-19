import React, {FC} from 'react';

import {IMovie} from "@/models/IMovie";
import './Details.css'
type MoviePropsType = {
    movie:IMovie
}

const DetailsInfoComponent:FC<MoviePropsType> =  ({movie}) => {


    return (

            <div className={"box-details"}>

                <img alt={'movie-img'} className={'movie-details-img'} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
                <div className={'description'}>
                    <h1>{movie.title}</h1>
                    <h2>{movie.overview}</h2>
                    <ul className={"ul-details"}>
                        <li className={"li-details"}><span className={"span-list"}>Release Date</span><hr/><span className={"uppercase"}>{movie.release_date}</span></li>
                        <li className={"li-details"}><span className={"span-list"}>Original Language</span><hr/><span className={"uppercase"}>{movie.original_language}</span></li>
                        <li className={"li-details"}><span className={"span-list"}>Original Title</span><hr/><span className={"uppercase"}>{movie.original_title}</span></li>
                    </ul>
                </div>
            </div>

    );
};

export default DetailsInfoComponent;