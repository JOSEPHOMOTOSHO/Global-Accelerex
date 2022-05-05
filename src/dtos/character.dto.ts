import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Episode } from "../interfaces/episode.interface";
import { Location } from "../interfaces/location.interface";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"
import { createLocation } from "./location.dto";
import { CreateEpisode } from "./episode.dto";

export enum status{
    ACTIVE="ACTIVE",
    DEAD="DEAD",
    UNKNOWN="UNKNOWN"

}

export enum gender{
    MALE="MALE",
    FEMALE="FEMALE"
}


export class CreateCharacter{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({type:String, description:'firstname'})
    firstname:string

    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({type:String, description:'lastname'})
    lastname:string

    @IsNotEmpty()
    @IsEnum(status)
    @ApiProperty({enum:["ACTIVE","DEAD","UNKNOWN"], description:'status'})
    status:string

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({type:String, description:'stateOfOrigin'})
    stateOfOrigin:string

    @IsNotEmpty()
    @IsEnum(gender)
    @ApiProperty({enum:['FEMALE','MALE'], description:'gender'})
    gender:string

    @IsOptional()
    @ApiPropertyOptional({ type:createLocation, description:'location'})
    location:Location
}