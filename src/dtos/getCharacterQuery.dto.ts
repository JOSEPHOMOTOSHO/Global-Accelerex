import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator";

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
    sort?:string

     
    @IsEnum(orderValues)
    @IsOptional()
    order?:orderValues

    @IsEnum(filterValues)
    @IsOptional()

    filter?:string

    @IsString()
    @IsOptional()

    filterValue?:string
}