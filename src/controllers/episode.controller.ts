import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Helpers } from '../helpers/utility.helpers';
import { Response } from '../interfaces/response.interface';
import { CreateEpisode } from '../dtos/episode.dto';
import { EpisodeService } from '../services/episode.service';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('episode')
export class EpisodeController {
    constructor(
        private readonly episodeService: EpisodeService,
      ) {}
    @Post()
    @ApiResponse({description:"Episode Created"})
    @ApiBody({type:CreateEpisode})
    async createEpisode(@Body() payload:CreateEpisode):Promise<Response>{
        const episode = await this.episodeService.addEpisode(payload)
        return Helpers.sendJsonResponse( episode ,'Episode has been created')
    }
    
    @Get()
    @ApiResponse({description:"All Episodes Retrieved"})
    async getAllEpisodes():Promise<Response>{
        const episodes = await this.episodeService.getAllEpisodes()
        return Helpers.sendJsonResponse( episodes ,'Episodes have been retrieved')
    }

    @Get("/:characterId")
    @ApiResponse({description:"Character and Character Episodes retrieved"})
    async getAllEpisodesByCharacter(@Param('characterId') characterId:string):Promise<Response>{
        const episodes = await this.episodeService.getAllEpisodesByCharacter(characterId)
        return Helpers.sendJsonResponse( episodes ,'Episodes by Character have been retrieved')
    }
}
