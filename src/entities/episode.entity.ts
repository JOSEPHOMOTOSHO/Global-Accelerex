import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Comment } from "./comment.entity";
import { Character } from "./character.entity";

/*
EPISODE DATA : n ame( String ) , r eleaseDate ( dateTime ) , e pisodeCode( String ) ,
characters ( Character Data Type ),episodeComments ( Comment Data Type ) ,
created( DateTime)
*/

@Entity()
export class Episode{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsString()
    @IsNotEmpty()
    name:string

    @Column()
    @IsNotEmpty()
    @CreateDateColumn()
    releaseDate:Date

    @Column()
    @IsString()
    @IsNotEmpty()
    episodeCode:string


    @OneToMany((type) => Comment, comment => comment.episode)
    episodeComments?:Comment[]

    @ManyToMany((type) => Character, character => character.episodes,{cascade:true} )
    characters?:Character[]

    @CreateDateColumn()
    @IsNotEmpty()
    @IsDate()
    created:Date
}