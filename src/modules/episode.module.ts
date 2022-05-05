import { Module } from '@nestjs/common';
import { EpisodeService } from '../services/episode.service';
import { EpisodeController } from '../controllers/episode.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EpisodeRepository } from '../repositories/episode.repository';
import { characterRepository } from '../repositories/character.repository';

@Module({
  imports:[TypeOrmModule.forFeature([EpisodeRepository,characterRepository])],
  providers: [EpisodeService],
  controllers: [EpisodeController]
})
export class EpisodeModule {}
