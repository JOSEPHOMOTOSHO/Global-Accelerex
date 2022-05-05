import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RepositoryException } from '../custom-exceptions/repository.exceptions';
import { characterRepository } from '../repositories/character.repository';
import { CreateEpisode } from '../dtos/episode.dto';
import { EpisodeRepository } from '../repositories/episode.repository';

@Injectable()
export class EpisodeService {
    constructor(
        @InjectRepository(EpisodeRepository)
        private episodeRepository: EpisodeRepository,
        @InjectRepository(characterRepository)
        private characterRepository: characterRepository,
    ){}

    async addEpisode(payload:CreateEpisode){
        let characters = await this.characterRepository.findByIds(payload.characters)
        payload.characters = characters
        return await this.episodeRepository.addEpisode(payload)
    }

    async getAllEpisodes(){
        return await this.episodeRepository.getAllEpisodes()
    }

    async getAllEpisodesByCharacter(characterId:string){
        try{
            let episodesWithCharacter = await this.characterRepository.findOne({id:+characterId},{
                relations:['episodes']
            })
            if (!episodesWithCharacter) {
                throw new RepositoryException(`Episodes that featured this character doesn't exist`)
              }

              return episodesWithCharacter
        }catch(err){
            throw new RepositoryException(`Error retieving episode, ${err.message}`)

        }
    }    
}
