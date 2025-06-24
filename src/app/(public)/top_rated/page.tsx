import React, {FC} from 'react';
import MoviesComponent from "@/components/Movie-List-Components/MoviesComponents/MoviesComponent";
import PaginationComponent from "@/components/Pagination/PaginationComponent";

type Props ={
    searchParams:{page?:string}
}

const TopRatedMoviePage:FC<Props> = ({searchParams}) => {

const page = searchParams.page ? parseInt(searchParams.page):1

    return (
        <div>

            <MoviesComponent type={'top_rated'} page={page}/>
            <PaginationComponent currentPage={page} basePath={'top_rated'}/>
        </div>
    );
};

export default TopRatedMoviePage;