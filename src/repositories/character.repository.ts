import { RepositoryException } from "../custom-exceptions/repository.exceptions";
import { GetCharactersQueryDto } from "../dtos/getCharacterQuery.dto";
import { EntityRepository, Repository } from "typeorm";
import { CreateCharacter } from "../dtos/character.dto";
import { Character } from "../entities/character.entity";

@EntityRepository(Character)
export class characterRepository extends Repository<Character>{
    async addCharacter(payload:CreateCharacter){
        const character:CreateCharacter= {
            firstname:payload.firstname,
            lastname: payload.lastname,
            status:payload.status,
            stateOfOrigin:payload.stateOfOrigin,
            gender:payload.gender,
            location:payload.location,
            episodes:payload.episodes
        }
        try {
            const createdCharacter = this.create(character)
            await this.save(createdCharacter)
            return createdCharacter
        } catch (err) {
            throw new RepositoryException(`Error saving character. ${err.message}`);
 
        }
    }

    async getAllCharacters(queryParms:GetCharactersQueryDto){
        const {sort,order,filter,filterValue} = queryParms
        try{
            let characters 
           if(sort && !filter){
            if(sort === 'name'){
                characters = this.find({
                    order:{
                        firstname:order,
                        lastname:order
                    }
                })
            }else{
                characters = this.find({
                   order:{
                    [sort]:order
                   }
                })
            }
           }else if(filter && !sort){
               if(filter === 'location'){
                characters = await this
                .createQueryBuilder('character')
                .innerJoin('character.location', 'location')
                .where('location.name= :name', { name: filterValue })
                .getMany();
               }else {
                characters = await this.find({
                  where: {
                    [filter]: filterValue
                  },
                  order: {
                    created: order
                  }
                });
              }
           }else if(filter && sort){
            characters = await this.find({
                where: {
                  [filter]: filterValue
                },
                order: {
                  [sort]: order
                }
              });
           } else {
            characters = await this.find({
              order: {
                created: "DESC"
              }
            });
          }
            return characters
        }catch(err){
            throw new RepositoryException(`Error getting characters. ${err.message}`);
        }
      
    }
   
}