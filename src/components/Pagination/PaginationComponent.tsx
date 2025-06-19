
'use client'

import React from 'react';
import {useSearchParams} from "next/navigation";

const PaginationComponent = () => {

    const [query,setQuery] = useSearchParams({page:'1'});

    return (
        <div className={'button-box'}>
<button onClick={()=>{
    const pg = query.get

}}></button>
        </div>
    );
};

export default PaginationComponent;