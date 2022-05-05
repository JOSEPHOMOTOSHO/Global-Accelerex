import { Episode } from "../interfaces/episode.interface";
import { Location } from "../interfaces/location.interface";
import { gender,status } from "../dtos/character.dto";



export interface CharacterType{
    id?:number,
    firstname:string
    lastname:string
    status:status
    stateOfOrigin?:string
    gender:gender
    location:Location
    episodes:Episode[]
    created?:Date
}