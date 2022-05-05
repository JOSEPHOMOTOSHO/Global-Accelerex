import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator";


export class createLocation{

    @IsString()
    @IsNotEmpty()
    @ApiProperty({description:"name",type:String})
    name:string

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({description:"latitude",type:Number})
    latitude:number

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({description:"longitude",type:Number})
    longitude:number
}