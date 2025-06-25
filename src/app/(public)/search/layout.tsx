import {Metadata} from "next";
import React from "react";


export const metadata:Metadata ={
    title:'Search Result'
}
type Props = {children:React.ReactNode}

const SearchLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default SearchLayout;
