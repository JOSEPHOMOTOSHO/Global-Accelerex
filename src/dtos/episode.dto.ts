import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";
import { Character } from "../entities/character.entity";
import { Comment  } from "../interfaces/comment.interface";
import { CreateCharacter } from "./character.dto";


export class CreateEpisode{

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:"name",type:String})
    name:string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:"episodeCode",type:String})
    episodeCode:string

    @IsOptional()
    @ApiPropertyOptional({description:"episodeComments",type:String})
    episodeComments:Comment[]

    @IsOptional()
    @ApiPropertyOptional({type:[Number],description:"characters"})
    characters:Character[]

    @Type(() => Date)
    @IsOptional()
    @IsDate()
    @ApiPropertyOptional({description:"releaseDate",type:Date})
    releaseDate:Date

   
}