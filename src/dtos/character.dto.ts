import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Episode } from "../interfaces/episode.interface";
import { Location } from "../interfaces/location.interface";

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
    firstname:string

    
    @IsString()
    @IsNotEmpty()
    lastname:string

    @IsNotEmpty()
    @IsEnum(status)
    status:string

    @IsString()
    @IsOptional()
    stateOfOrigin:string

    @IsNotEmpty()
    @IsEnum(gender)
    gender:string

    @IsOptional()
    location:Location

    @IsOptional()
    episodes:Episode[]
}