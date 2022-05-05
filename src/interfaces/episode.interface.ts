import { Character } from "../entities/character.entity"
import { Comment } from "../interfaces/comment.interface"

export interface Episode{
    id?:number,
    name:string
    releaseDate:Date
    episodeCode:string
    episodeComments?:Comment[]
    characters?:Character[]
    created:Date
}