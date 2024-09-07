import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { HttpModule } from '@nestjs/axios';
import { Movie, MovieSchema } from './schemas/movie.schemas';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  
   imports: [MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
   HttpModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
