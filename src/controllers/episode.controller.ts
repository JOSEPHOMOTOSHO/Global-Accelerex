import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Helpers } from '../helpers/utility.helpers';
import { Response } from '../interfaces/response.interface';
import { CreateEpisode } from '../dtos/episode.dto';
import { EpisodeService } from '../services/episode.service';

@Controller('episode')
export class EpisodeController {
    constructor(
        private readonly episodeService: EpisodeService,
      ) {}
    @Post()
    async createEpisode(@Body() payload:CreateEpisode):Promise<Response>{
        const episode = await this.episodeService.addEpisode(payload)
        return Helpers.sendJsonResponse( episode ,'Episode has been created')
    }
    
    @Get()
    async getAllEpisodes():Promise<Response>{
        const episodes = await this.episodeService.getAllEpisodes()
        return Helpers.sendJsonResponse( episodes ,'Episodes have been retrieved')
    }

    @Get("/:characterId")
    async getAllEpisodesByCharacter(@Param('characterId') characterId:string):Promise<Response>{
        const episodes = await this.episodeService.getAllEpisodesByCharacter(characterId)
        return Helpers.sendJsonResponse( episodes ,'Episodes by Character have been retrieved')
    }
}
