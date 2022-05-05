import { Test, TestingModule } from '@nestjs/testing';
import { CharacterService } from '../services/character.service';
import { CreateCharacter} from "../dtos/character.dto"
import { CharacterController } from '../controllers/character.controller';
import {GetCharactersQueryDto} from "../dtos/getCharacterQuery.dto"

describe('CharacterController', () => {
  let characterController: CharacterController;
  let mockService: CharacterService

  const characterResponse = {
    firstName: 'Flora',
    lastName: 'Shaw',
    status: 'DEAD',
    gender: 'FEMALE',
    location: {
      id: 4,
      name: "Osun",
      latitude: 4.5200,
      longitude: 7.5629,
      created: "2022-05-04T23:45:06.012Z"
  },
  id: 1,
  created: '2022-05-04 12:02:50.609216',

  };

  const getAllCharactersResponse = {
      id: 4,
      firstname: "Esther",
      lastname: "Omotosho",
      status: "ACTIVE",
      stateOfOrigin: "ekiti",
      gender: "FEMALE",
      created: "2022-05-04T23:45:06.064Z",
      episodes: []
  
  }

  
  beforeEach(async () => {
    const characterServiceMock = {
      provide:CharacterService,
      useFactory: () => ({
        addCharacter: jest.fn().mockResolvedValue(characterResponse),
        getAllCharacters: jest.fn().mockResolvedValue([getAllCharactersResponse])
      })
    }
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharacterController],
      providers:[CharacterService,characterServiceMock]
    }).compile();

    characterController = module.get<CharacterController>(CharacterController);
    mockService = module.get<CharacterService>(CharacterService)
  });

  it('should be defined', () => {
    expect(characterController).toBeDefined();
  });

  it('should call the addCharacter method', async () => {
      const createCharacterDto = new CreateCharacter()
      let characters =  await characterController.createCharacter(createCharacterDto)
      expect(mockService.addCharacter).toHaveBeenCalled()
      expect(mockService.addCharacter).toHaveBeenCalledWith(createCharacterDto)
      expect(characters.data).toEqual(characterResponse)
  });

  it('should call the getAllCharacters method', async () => {
    const getCharactersParamsDto = new GetCharactersQueryDto()
    const characters =  await characterController.getAllCharacters(getCharactersParamsDto);
    expect(mockService.getAllCharacters).toHaveBeenCalled()
    expect(mockService.getAllCharacters).toHaveBeenCalledWith(getCharactersParamsDto)
    expect(characters.data[0]).toEqual(getAllCharactersResponse)
});
});
