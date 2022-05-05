import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryException } from '../custom-exceptions/repository.exceptions';
import { EpisodeRepository } from '../repositories/episode.repository';
import { CreateComment } from '../dtos/comment.dto';
import { CommentRepository } from '../repositories/comment.repository';

@Injectable()
export class CommentService {
    constructor(
        @InjectRepository(CommentRepository)
        private commentRepository: CommentRepository,
        @InjectRepository(EpisodeRepository)
        private episodeRepository: EpisodeRepository,
    ){}

    async addComment(payload:CreateComment,episodeId:string){
        let episode = await this.episodeRepository.findOne({id: +episodeId})
        if(!episode){
            throw new RepositoryException(`Episode of ${episodeId} not found`)
        }
        payload.episode = episode
        return await this.commentRepository.addComment(payload)
    }

    async getAllComments(){
        let comments = this.commentRepository.getAllComments()
        return comments
    }

}
