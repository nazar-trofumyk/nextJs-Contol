import {IMovie} from "@/models/IMovie";
import {IResponse} from "@/models/IResponse";
import {IGenres} from "@/models/IGenres";
import {IGenresResponse} from "@/models/IGenresResponse";
import {baseURL, Key} from "@/service/api.key-url";


export const getAllMovies = async (type:string):Promise<IMovie[]> => {
    const response:IResponse=await fetch(`${baseURL}/movie/${type}?api_key=${Key}`).then(value => value.json())
return response.results
}

export const getMovieByID = async (id:string):Promise<IMovie> => {
    return  await fetch(`${baseURL}/movie/${id}?api_key=${Key}`).then(value => value.json());
}



