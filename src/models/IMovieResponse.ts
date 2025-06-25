import {IMovie} from "@/models/IMovie";

export interface IMovieResponse {
    pages:number
    results:IMovie[]
    total_pages:number
    total_results:number
}