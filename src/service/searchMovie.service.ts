import {IMovie} from "@/models/IMovie";
import {IResponse} from "@/models/IResponse";
import {baseURL, Key} from "@/service/api.key-url";

export const searchMovie = async (query:string):Promise<IMovie[]> => {
    const response:IResponse =await fetch(`${baseURL}/search/movie?query=${query}&api_key=${Key}`)
        .then(value => value.json())
    console.log(response.results)
    return response.results

}