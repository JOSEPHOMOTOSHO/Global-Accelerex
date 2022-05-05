import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Helpers } from '../helpers/utility.helpers';
import { Response } from '../interfaces/response.interface';
import { CharacterService } from '../services/character.service';
import { CreateCharacter } from '../dtos/character.dto';
import { GetCharactersQueryDto } from '../dtos/getCharacterQuery.dto';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger'

@Controller('character')
export class CharacterController {
    constructor(
        private readonly characterService: CharacterService,
      ) { }

    @Post()
    @ApiCreatedResponse({description:'Character Creation Response'})
    @ApiBody({type:CreateCharacter})
    async createCharacter(@Body() payload:CreateCharacter):Promise<Response>{
        const character = await this.characterService.addCharacter(payload)
        return Helpers.sendJsonResponse( character ,'character has beeen created')
    }


    @Get()
    @ApiOkResponse({description:'Get all characters response'})
    async getAllCharacters(@Query() queryParms:GetCharactersQueryDto):Promise<Response>{
        const characters = await this.characterService.getAllCharacters(queryParms)
        return Helpers.sendJsonResponse( characters ,'All Characters')
    }
}
