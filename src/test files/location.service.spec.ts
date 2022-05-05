import { Test, TestingModule } from '@nestjs/testing';
import { createLocation } from '../dtos/location.dto';
import { LocationService } from '../services/location.service';

class mockLocationService{
  addLocation(payload: createLocation){
      return {}
  }
} 

describe.only('LocationService', () => {
  let locationService: LocationService;

  const mockLocationServiceProvider = {
    provide:LocationService,
    useClass:mockLocationService
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationService,mockLocationServiceProvider],
    }).compile();

    locationService = module.get<LocationService>(LocationService);
  });

  it('should be defined', () => {
    expect(locationService).toBeDefined();
  });

  it('should call the addLocation method with the required params', () => {
        const addLocationSpy = jest.spyOn(locationService, "addLocation")
        const addLocationDto = new createLocation()
        locationService.addLocation(addLocationDto)
        expect(addLocationSpy).toHaveBeenCalledWith(addLocationDto)
  });
});
