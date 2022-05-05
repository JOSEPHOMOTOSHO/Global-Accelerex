import { Test, TestingModule } from '@nestjs/testing';
import { EpisodeService } from '../services/episode.service';
import { EpisodeController } from '../controllers/episode.controller';
import { CreateEpisode } from '../dtos/episode.dto';

describe('EpisodeController', () => {
  let episodeController: EpisodeController;
  let mockService: EpisodeService

  const episodeResponse = {
    name: "episode 2",
    releaseDate: "2022-02-01T00:00:00.000Z",
    episodeCode: "Two Two",
    characters: [
        {
            id: 1,
            firstname: "Joseph",
            lastname: "Omotosho",
            status: "ACTIVE",
            stateOfOrigin: "ekiti",
            gender: "MALE",
            created: "2022-05-03T12:51:44.854Z",
            episodes: [
                {
                    id: 3,
                    name: "episode 2",
                    releaseDate: "2022-02-01T00:00:00.000Z",
                    episodeCode: "Two Two",
                    created: "2022-05-03T17:30:08.990Z"
                }
            ]
        },
        {
            id: 2,
            firstname: "Esther",
            lastname: "Omotosho",
            status: "ACTIVE",
            stateOfOrigin: "ekiti",
            gender: "FEMALE",
            created: "2022-05-03T12:52:54.458Z",
            episodes: [
                {
                    id: 3,
                    name: "episode 2",
                    releaseDate: "2022-02-01T00:00:00.000Z",
                    episodeCode: "Two Two",
                    created: "2022-05-03T17:30:08.990Z"
                }
            ]
        }
    ],
    id: 4,
    created: "2022-05-05T01:12:51.757Z"
}
const allEpisodeResponse = {
    id: 4,
    name: "episode 2",
    releaseDate: "2022-02-01T00:00:00.000Z",
    episodeCode: "Two Two",
    created: "2022-05-05T01:12:51.757Z",
    episodeComments: [],
    commentCount: 0
}

const getAllEpisodeByCharacter = {
    id: 2,
    firstname: "Esther",
    lastname: "Omotosho",
    status: "ACTIVE",
    stateOfOrigin: "ekiti",
    gender: "FEMALE",
    created: "2022-05-03T12:52:54.458Z",
    episodes: [
        {
            id: 3,
            name: "episode 2",
            releaseDate: "2022-02-01T00:00:00.000Z",
            episodeCode: "Two Two",
            created: "2022-05-03T17:30:08.990Z"
        }
    ]

}
  beforeEach(async () => {
    const episodeServiceMock = {
      provide:EpisodeService,
      useFactory:() => ({
        addEpisode: jest.fn().mockResolvedValue(episodeResponse),
        getAllEpisodes: jest.fn().mockResolvedValue([allEpisodeResponse]),
        getAllEpisodesByCharacter:jest.fn().mockResolvedValue([getAllEpisodeByCharacter]),
      })
    }
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EpisodeController],
      providers:[EpisodeService,episodeServiceMock]
    }).compile();

    episodeController = module.get<EpisodeController>(EpisodeController);
    mockService = module.get<EpisodeService>(EpisodeService)
  });

  it('should be defined', () => {
    expect(episodeController).toBeDefined();
  });

  it('should call the createEpisode method ', async  () => {
      let createEpisodeDto = new CreateEpisode()
      const createdEpisode = await episodeController.createEpisode(createEpisodeDto)
      expect(mockService.addEpisode).toHaveBeenCalled()
      expect(mockService.addEpisode).toHaveBeenCalledWith(createEpisodeDto)
      expect(createdEpisode.data).toEqual(episodeResponse)
  });

  it('should call the getAllEpisode method ', async  () => {
    const allEpisodes = await episodeController.getAllEpisodes()
    expect(mockService.getAllEpisodes).toHaveBeenCalled()
    expect(allEpisodes.data[0]).toEqual(allEpisodeResponse)

});

it('should call the getAllEpisodesByCharacter method ', async  () => {
  const idString = '1'
  const episodesByCharacter = await episodeController.getAllEpisodesByCharacter(idString)
  expect(mockService.getAllEpisodesByCharacter).toHaveBeenCalled()
  expect(mockService.getAllEpisodesByCharacter).toHaveBeenCalledWith(idString)
  expect(episodesByCharacter.data[0]).toEqual(getAllEpisodeByCharacter)
});
});
