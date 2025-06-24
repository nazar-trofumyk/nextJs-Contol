import {IMovie} from "@/models/IMovie";
import {IResponse} from "@/models/IResponse";
import {baseURL, Key} from "@/service/api.config";


export const getAllMovies = async (type:string,page:number):Promise<IMovie[]> => {
    const response:IResponse=await fetch(`${baseURL}/movie/${type}?api_key=${Key}&page=${page}`).then(value => value.json())
return response.results
}

export const getMovieByID = async (id:string):Promise<IMovie> => {
    return  await fetch(`${baseURL}/movie/${id}?api_key=${Key}`).then(value => value.json());
}



