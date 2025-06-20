import React, {FC} from 'react';
import {IGenres} from "@/models/IGenres";
import Link from "next/link";


type GenrePropsType ={
    genre:IGenres
}

const GenreComponent:FC<GenrePropsType> = ({genre}) => {
    return (
        <li>
            <Link href={`/genre/${genre.id}`}> {genre.name} </Link>
        </li>
    );
};

export default GenreComponent;