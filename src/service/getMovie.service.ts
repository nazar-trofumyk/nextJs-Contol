import {IMovie} from "@/models/IMovie";
import {IMovieResponse} from "@/models/IMovieResponse";
import {baseURL, Key} from "@/service/api.config";


export const getAllMovies = async (type:string,page:number=1):Promise<IMovie[]> => {
    const response:IMovieResponse=await fetch(`${baseURL}/movie/${type}?api_key=${Key}&page=${page}`).then(value => value.json())
return response.results
}

export const getMovieByID = async (id:string):Promise<IMovie> => {
    return  await fetch(`${baseURL}/movie/${id}?api_key=${Key}`).then(value => value.json());
}



