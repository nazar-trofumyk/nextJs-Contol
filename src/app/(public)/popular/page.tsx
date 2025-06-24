import React, {FC} from 'react';
import MoviesComponent from "@/components/Movie-List-Components/MoviesComponents/MoviesComponent";
import PaginationComponent from "@/components/Pagination/PaginationComponent";

type Props ={
    searchParams:{page?:string}
}

const PopularMoviePage:FC<Props> =  ({searchParams}) => {
const page = searchParams.page ? parseInt(searchParams.page):1

    return (
        <div>
            <MoviesComponent type={'popular'} page={page}/>
            <PaginationComponent currentPage={page} basePath={'popular'}/>
        </div>
    );
};

export default PopularMoviePage;