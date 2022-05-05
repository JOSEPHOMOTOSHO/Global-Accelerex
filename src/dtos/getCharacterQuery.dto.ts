import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger"

export enum sortValues{
    NAME ='name',
    GENDER = 'gender'

}
export enum orderValues{
    ASC ='ASC',
    DESC = 'DESC'

}

export enum filterValues{
    LOCATION ='location',
    GENDER = 'gender',
    STATUS = 'status'

}


export class GetCharactersQueryDto{
    @IsEnum(sortValues)
    @IsOptional()
    @ApiPropertyOptional({enum:['name','gender'],description:'sort'})
    sort?:string

     
    @IsEnum(orderValues)
    @IsOptional()
    @ApiPropertyOptional({enum:['ASC','DESC'], description:'order'})
    order?:orderValues

    @IsEnum(filterValues)
    @ApiPropertyOptional({enum:['location','gender','status'], description:'filter'})
    @IsOptional()
    filter?:string

    @IsString()
    @IsOptional()
    @ApiPropertyOptional({type:String, description:'filterValue'})
    filterValue?:string
}