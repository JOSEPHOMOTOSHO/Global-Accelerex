import { Module } from '@nestjs/common';
import { CommentService } from '../services/comment.service';
import { CommentController } from '../controllers/comment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentRepository } from '../repositories/comment.repository';
import { EpisodeRepository } from '../repositories/episode.repository';

@Module({
  imports:[TypeOrmModule.forFeature([CommentRepository,EpisodeRepository])],

  providers: [CommentService],
  controllers: [CommentController]
})
export class CommentModule {}
