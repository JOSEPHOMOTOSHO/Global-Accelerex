import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationRepository } from '../repositories/location.repository';
import { CharacterController } from '../controllers/character.controller';
import { characterRepository } from '../repositories/character.repository';
import { CharacterService } from '../services/character.service';

@Module({
  imports:[TypeOrmModule.forFeature([characterRepository,LocationRepository])],
  controllers: [CharacterController],
  providers: [CharacterService]
})
export class CharacterModule {}
