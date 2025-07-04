import {IGenres} from "@/models/IGenres";
import {IGenresResponse} from "@/models/IGenresResponse";
import {baseURL, Key} from "@/service/api.config";
import {IMovie} from "@/models/IMovie";
import {IMovieResponse} from "@/models/IMovieResponse";

export const getGenres = async ():Promise<IGenres[]> => {
    const response:IGenresResponse = await fetch(`${baseURL}/genre/movie/list?api_key=${Key}`)
        .then(value => value.json())
    return response.genres
}

export const getMovieByGenre = async (genreId:string,page:number=1):Promise<IMovie[]> => {
    const response:IMovieResponse = await fetch(`${baseURL}/discover/movie?api_key=${Key}&with_genres=${genreId}&page=${page}`)
        .then(value => value.json());
    return response.results
}