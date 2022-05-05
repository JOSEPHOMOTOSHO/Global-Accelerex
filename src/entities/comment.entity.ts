import { IsDate, IsNotEmpty, IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Episode } from "./episode.entity";

@Entity()
export class Comment{
    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar", { length: 249 })
    @IsString()
    @IsNotEmpty()
    comment:string

    @ManyToOne((type) => Episode, episode => episode.episodeComments,{onDelete:"CASCADE",cascade:true}) 
    episode:Episode

    @Column()
    @IsNotEmpty()
    @IsString()
    ipAddressLocation:string

    @CreateDateColumn()
    @IsNotEmpty()
    @IsDate()
    created:Date
}