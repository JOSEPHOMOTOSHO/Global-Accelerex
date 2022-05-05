import { Test, TestingModule } from '@nestjs/testing';
import { LocationService } from '../services/location.service';
import { LocationController } from '../controllers/location.controller';
import { createLocation } from '../dtos/location.dto';

describe('LocationController', () => {
  let locationController: LocationController;
  let mockService:LocationService


  const locationResponse = {
    name: "Benue",
    latitude: 2.6218,
    longitude: 1.5227,
    id: 5,
    created: "2022-05-05T05:31:43.673Z"
}
  beforeEach(async () => {
    const mockLocationService = {
      provide:LocationService,
      useFactory: () => ({
        addLocation: jest.fn().mockResolvedValue(locationResponse)
      })
    }
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocationController],
      providers:[LocationService,mockLocationService]
    }).compile();

    locationController = module.get<LocationController>(LocationController);
    mockService = module.get<LocationService>(LocationService)
  });

  it('should be defined', () => {
    expect(locationController).toBeDefined();
  });

  it('should call the createLocation method', async () => {
    const createLocationDto = new createLocation()
    const location = await locationController.createLocation(createLocationDto)
    expect(mockService.addLocation).toHaveBeenCalled()
    expect(mockService.addLocation).toHaveBeenCalledWith(createLocationDto)
    expect(location.data).toEqual(locationResponse)
  });
});
