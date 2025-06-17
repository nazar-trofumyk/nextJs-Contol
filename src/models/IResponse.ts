import {IMovie} from "@/models/IMovie";

export interface IResponse {
    pages:number
    results:IMovie[]
    total_pages:number
    total_results:number
}