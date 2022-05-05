import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";
import { Episode } from "../interfaces/episode.interface";
import { CreateEpisode } from "./episode.dto";


export class CreateComment{

    @IsString()
    @Length(1,249)
    @IsNotEmpty()
    @ApiProperty({type:String, description:'comment'})
    comment:string

    @IsOptional()
    @ApiProperty({type:CreateEpisode,description:'episode'})
    episode:Episode

    @IsNotEmpty()
    @IsString()
    @ApiProperty({type:String, description:'ipAddressLocation'})
    ipAddressLocation:string

}