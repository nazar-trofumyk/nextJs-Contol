import {IMovie} from "@/models/IMovie";
import {IMovieResponse} from "@/models/IMovieResponse";
import {baseURL, Key} from "@/service/api.config";

export const searchMovie = async (query:string):Promise<IMovie[]> => {
    const response:IMovieResponse =await fetch(`${baseURL}/search/movie?query=${query}&api_key=${Key}`)
        .then(value => value.json())
    console.log(response.results)
    return response.results

}