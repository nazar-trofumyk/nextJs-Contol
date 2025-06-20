import {IMovie} from "@/models/IMovie";
import {IResponse} from "@/models/IResponse";

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL
export const Key = process.env.NEXT_PUBLIC_API_KEY

export const getAllMovies = async (type:string):Promise<IMovie[]> => {
    const response:IResponse=await fetch(`${baseURL}/movie/${type}?api_key=${Key}`).then(value => value.json())
return response.results
}

export const getMovieByID = async (id:string):Promise<IMovie> => {
    return  await fetch(`${baseURL}/movie/${id}?api_key=${Key}`).then(value => value.json());
}

export const searchMovie = async (query:string):Promise<IMovie[]> => {
    const response:IResponse =await fetch(`${baseURL}/search/movie?query=${query}&api_key=${Key}`)
        .then(value => value.json())
console.log(response.results)
    return response.results

}