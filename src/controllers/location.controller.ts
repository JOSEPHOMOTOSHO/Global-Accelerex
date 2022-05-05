import { Body, Controller, Post } from '@nestjs/common';
import { Helpers } from '../helpers/utility.helpers';
import { Response } from '../interfaces/response.interface';
import { createLocation } from '../dtos/location.dto';
import { LocationService } from '../services/location.service';
import { ApiBody } from '@nestjs/swagger';

@Controller('location')
export class LocationController {
    constructor(
        private readonly locationService: LocationService,
      ) {}
    @Post()
    @ApiBody({type:createLocation})
    async createLocation(@Body() payload:createLocation):Promise<Response>{
        const location = await this.locationService.addLocation(payload)
        return Helpers.sendJsonResponse( location ,'Location has beeen created')
    }
}
