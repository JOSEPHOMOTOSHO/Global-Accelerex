import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Character } from "./character.entity";

@Entity()
export class Location{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    name:string

    @Column("double")
    @IsNotEmpty()
    latitude:number

    @Column("double")
    @IsNotEmpty()
    longitude:number

    @OneToOne(() => Character, character => character.location,{eager:false})
    character:Character

    @CreateDateColumn()
    @IsNotEmpty()
    @IsDate()
    created:Date
}