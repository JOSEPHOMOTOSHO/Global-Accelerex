import { Injectable, Query } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetCharactersQueryDto } from '../dtos/getCharacterQuery.dto';
import { LocationRepository } from '../repositories/location.repository';
import { CreateCharacter } from '../dtos/character.dto';
import { characterRepository } from '../repositories/character.repository';

@Injectable()
export class CharacterService {
    constructor(
        @InjectRepository(characterRepository)
        private characterRepository: characterRepository,
        @InjectRepository(LocationRepository)
        private locationRepository: LocationRepository
    ){}

    async addCharacter(payload:CreateCharacter){
        if(payload.location && Object.keys(payload.location).length !== 0){
            let location = await this.locationRepository.addLocation(payload.location)
            payload.location = location
        }
        return await this.characterRepository.addCharacter(payload)
    }

    async getAllCharacters(queryParms:GetCharactersQueryDto){
        return await this.characterRepository.getAllCharacters(queryParms)
    }
   
        
   
}
