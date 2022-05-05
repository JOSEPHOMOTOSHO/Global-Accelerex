import { Episode } from "../interfaces/episode.interface"


export interface Comment{
    id:number,
    comment:string
    episode:Episode
    ipAddressLocation:string
    created:Date
}