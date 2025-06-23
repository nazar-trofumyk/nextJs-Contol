'use client'
import React from 'react';
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";

interface ISearchForm{
    query:string
}

const SearchForm = () => {

const router = useRouter();
    const {handleSubmit,
    formState:{errors,isValid},
    register

} = useForm<ISearchForm>({mode:'all',});

const onSubmit = (form:ISearchForm)=> {
    console.log(form)
    router.push(`/search?query=${encodeURIComponent(form.query)}`)
}

    return (
        <form action={'/search'} onSubmit={handleSubmit(onSubmit)}>
            <label>
                <input type={'search'} placeholder={'Search film'} {...register("query")}/>
                {errors.query && <p className={'error-msg'}>{errors.query.message}</p>}
            </label>
            <button disabled={!isValid}>Search</button>
        </form>
    );
};

export default SearchForm;