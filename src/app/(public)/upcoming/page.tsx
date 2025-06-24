import React, {FC} from 'react';
import MoviesComponent from "@/components/Movie-List-Components/MoviesComponents/MoviesComponent";
import PaginationComponent from "@/components/Pagination/PaginationComponent";


type Props ={
    searchParams:{page?:string}
}

const UpcomingPage:FC<Props> = ({searchParams}) => {
    const page = searchParams.page ? parseInt(searchParams.page) :1

    return (
        <div>
            <MoviesComponent type={'upcoming'}/>
            <PaginationComponent currentPage={page} basePath={'upcoming'}/>
        </div>
    );
};

export default UpcomingPage;