import {IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator";


export class createLocation{

    @IsString()
    @IsNotEmpty()
    name:string

    @IsNumber()
    @IsNotEmpty()
    latitude:number

    @IsNumber()
    @IsNotEmpty()
    longitude:number
}