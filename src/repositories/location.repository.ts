import { RepositoryException } from "../custom-exceptions/repository.exceptions";
import { createLocation } from "../dtos/location.dto";
import { EntityRepository, Repository } from "typeorm";
import { Location } from "../entities/location.entity";



@EntityRepository(Location)
export class LocationRepository extends Repository<Location>{
    async addLocation(payload:createLocation){
        const location:createLocation = {
            name:payload.name,
            latitude:payload.latitude,
            longitude:payload.longitude,
        }
        try {
            const createdLocation= this.create(location)
            await this.save(createdLocation)
            return createdLocation
        } catch (err) {
            throw new RepositoryException(`Error saving Location. ${err.message}`);
 
        }
    }
}