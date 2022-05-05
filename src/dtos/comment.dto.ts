import { IsEnum, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";
import { Episode } from "../interfaces/episode.interface";


export class CreateComment{

    @IsString()
    @Length(1,249)
    @IsNotEmpty()
    comment:string

    @IsOptional()
    episode:Episode

    @IsNotEmpty()
    @IsString()
    ipAddressLocation:string

}