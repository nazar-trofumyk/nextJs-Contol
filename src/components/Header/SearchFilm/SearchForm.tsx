'use client'
import React from 'react';
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";
import {filmValidator} from "@/validator/SearchValidator";
import {joiResolver} from "@hookform/resolvers/joi";
import './SearchFilm.css'

interface ISearchForm{
    query:string
}

const SearchForm = () => {

const router = useRouter();
    const {handleSubmit,
    formState:{errors,isValid},
    register

} = useForm<ISearchForm>({mode:'all',resolver:joiResolver(filmValidator)});

const onSubmit = (form:ISearchForm)=> {
    console.log(form)
    router.push(`/search?query=${encodeURIComponent(form.query)}`)
}

    return (
        <form  action={'/search'} onSubmit={handleSubmit(onSubmit)}>
            <label>
                <input type={'search'} placeholder={'Search film'} {...register("query")}/>
                {errors.query && <p className={'error-msg'}>{errors.query.message}</p>}
            </label>
            <button className={'button-send'} disabled={!isValid}>Search</button>
        </form>
    );
};

export default SearchForm;