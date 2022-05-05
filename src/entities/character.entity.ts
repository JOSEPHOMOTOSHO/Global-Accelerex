import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Episode } from "../entities/episode.entity";
import { Location } from "../entities/location.entity";
import { status,gender } from "../dtos/character.dto";


@Entity()
export class Character{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    firstname:string

    @Column()
    @IsString()
    @IsNotEmpty()
    lastname:string

    @Column()
    @IsNotEmpty()
    @IsEnum(status)
    status:string

    @Column()
    stateOfOrigin:string

    @Column()
    @IsNotEmpty()
    @IsEnum(gender)
    gender:string

    @OneToOne((type) => Location) @JoinColumn()
    location:Location

    @ManyToMany(()=> Episode, episode => episode.characters,{eager:true}) @JoinTable()
    episodes:Episode[]

    @CreateDateColumn()
    created:Date
}