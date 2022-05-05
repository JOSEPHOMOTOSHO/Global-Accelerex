import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createLocation } from '../dtos/location.dto';
import { LocationRepository } from '../repositories/location.repository';

@Injectable()
export class LocationService {
    constructor(
        @InjectRepository(LocationRepository)
        private locationRepository: LocationRepository,
    ){}

    async addLocation(payload:createLocation){
        return await this.locationRepository.addLocation(payload)
    }

}
