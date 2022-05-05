import { Test, TestingModule } from '@nestjs/testing';
import { CharacterService } from '../services/character.service';
import { CreateCharacter } from '../dtos/character.dto';
import { GetCharactersQueryDto } from '../dtos/getCharacterQuery.dto';


class CharacterServiceMock{
  addCharacter(payload:CreateCharacter){
    return {}
  }

  getAllCharacters(payload:GetCharactersQueryDto){
    return []
  }
}

describe.only('CharacterService', () => {
  let Characterservice: CharacterService;

  beforeAll(async () => {
    const characterServiceProviderMock = {
      provide:CharacterService,
      useClass:CharacterServiceMock
    }
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterService,characterServiceProviderMock],
    }).compile();

    Characterservice = module.get<CharacterService>(CharacterService);
  });

  it('should be defined', () => {
    expect(Characterservice).toBeDefined();
  });

  it('should call addCharacter Method with required params', async () => {
   const charaterServiceSpy = jest.spyOn(Characterservice, 'addCharacter')
   const createCharacterDto = new CreateCharacter()
   Characterservice.addCharacter(createCharacterDto)
   expect(charaterServiceSpy).toHaveBeenCalledWith(createCharacterDto)
  });

  it('should call getAllCharacters Method ', async () => {
    const charaterServiceSpy = jest.spyOn(Characterservice, 'getAllCharacters')
    const getCharacterDto = new GetCharactersQueryDto()
    Characterservice.getAllCharacters(getCharacterDto)
    expect(charaterServiceSpy).toHaveBeenCalledWith(getCharacterDto)
   });
});
