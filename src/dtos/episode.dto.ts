import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";
import { Character } from "../entities/character.entity";
import { Comment  } from "../interfaces/comment.interface";


export class CreateEpisode{

    @IsString()
    @IsNotEmpty()
    name:string

    @IsString()
    @IsNotEmpty()
    episodeCode:string

    @IsOptional()
    episodeComments:Comment[]

    @IsOptional()
    characters:Character[]

    @Type(() => Date)
    @IsOptional()
    @IsDate()
    releaseDate:Date

   
}