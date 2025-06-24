'use client'

import React, { FC } from 'react';
import { useRouter } from 'next/navigation';
import './Pagination.css'

type PaginationProps = {
    currentPage: number;
    basePath: string;
    totalPages?: number;
};

const Pagination: FC<PaginationProps> = ({ currentPage, basePath, totalPages = 500 }) => {
    const router = useRouter();

    const Handler = (page: number) => {
        router.push(`${basePath}?page=${page}`);
    };

    return (
        <div className={'pagination-block'}>
            <button
                onClick={() => Handler(currentPage - 1)}
                disabled={currentPage <= 1}>← Prev</button>

            <span>Page {currentPage} / {totalPages}</span>

            <button
                onClick={() => Handler(currentPage + 1)}
                disabled={currentPage >= totalPages}
            >Next →</button>
        </div>
    );
};

export default Pagination;