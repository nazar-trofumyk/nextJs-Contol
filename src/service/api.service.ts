import {IMovie} from "@/models/IMovie";
import {IResponse} from "@/models/IResponse";

export const baseURL = process.env.BASE_URL
export const Key = process.env.API_KEY

export const getAllMovies = async (type:string):Promise<IMovie[]> => {
    const response:IResponse=await fetch(`${baseURL}/movie/${type}?api_key=${Key}`).then(value => value.json())
return response.results
}