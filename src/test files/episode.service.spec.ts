import { Test, TestingModule } from '@nestjs/testing';
import { EpisodeService } from '../services/episode.service';
import { CreateEpisode } from '../dtos/episode.dto';


class episodeServiceMock{
  addEpisode(payload:CreateEpisode){
    return {}
  }
  getAllEpisodes(){
      return []
  }
  getAllEpisodesByCharacter(Id:string){
      return {}
  }
}

describe.only('EpisodeService', () => {
  let episodeService: EpisodeService;

  const episodeServiceMockProvider = {
    provide:EpisodeService,
    useClass:episodeServiceMock
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EpisodeService,episodeServiceMockProvider],
    }).compile();

    episodeService = module.get<EpisodeService>(EpisodeService);
  });

  it('should be defined', () => {
    expect(episodeService).toBeDefined();
  });

  it('should call the addEpisode method with the required params', () => {
    const CreateEpisodeSpy = jest.spyOn(episodeService, "addEpisode")
    const createEpisodeDto = new CreateEpisode()
    episodeService.addEpisode(createEpisodeDto)
    expect(CreateEpisodeSpy).toHaveBeenCalledWith(createEpisodeDto)
  });

  it('should call the getAllEpisodes method', () => {
    const CreateEpisodeSpy = jest.spyOn(episodeService, "getAllEpisodes")
    episodeService.getAllEpisodes()
    expect(CreateEpisodeSpy).toHaveBeenCalled()
  });

  it('should call the getAllEpisodesByCharacter method with the required param', () => {
    const getEpisodeByCharacterSpy = jest.spyOn(episodeService, "getAllEpisodesByCharacter")
    const characterId = "characterId"
    episodeService.getAllEpisodesByCharacter(characterId)
    expect(getEpisodeByCharacterSpy).toHaveBeenCalledWith(characterId)
  });

});
