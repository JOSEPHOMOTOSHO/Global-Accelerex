import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Episode } from "../interfaces/episode.interface";
import { Location } from "../interfaces/location.interface";
import { ApiProperty } from "@nestjs/swagger"

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
    @ApiProperty({type:String, description:'status'})
    status:string

    @IsString()
    @IsOptional()
    @ApiProperty({type:String, description:'stateOfOrigin'})
    stateOfOrigin:string

    @IsNotEmpty()
    @IsEnum(gender)
    @ApiProperty({type:String, description:'gender'})
    gender:string

    @IsOptional()
    location:Location

    @IsOptional()
    episodes:Episode[]
}