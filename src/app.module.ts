import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterModule } from './modules/character.module';
import { LocationModule } from './modules/location.module';
import { CommentModule } from './modules/comment.module';
import { EpisodeModule } from './modules/episode.module';
require('dotenv').config()


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB,
      autoLoadEntities: true,
      synchronize: true,
    }),
    CharacterModule,
    LocationModule,
    CommentModule,
    EpisodeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
