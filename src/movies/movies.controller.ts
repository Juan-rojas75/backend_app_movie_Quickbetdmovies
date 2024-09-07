import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { ParseObjectIdPipe } from 'src/utilities/parse-object-id.pipe';
import { Request } from 'express';
import { ApiTags } from '@nestjs/swagger';

@Controller('movies')
@ApiTags('movies') 
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  //OBTENER PELICULAS POPULARES
  @Get('/popular/:page')
  findPopularMovies(@Param('page') page: number) {
    return this.moviesService.getPopularMovies(page);
  }

   //OBTENER PELICULAS POPULARES
   @Get('/details/:id')
   findMovieDetail(@Param('id') id: number) {
     return this.moviesService.getMoviesDetails(id);
   }

   @Post()
   create(@Body() createMovieDto: CreateMovieDto) {
     return this.moviesService.create(createMovieDto);
   }
 
   @Get()
   findAll(@Req() request: Request) {
     return this.moviesService.findAll(request);
   }
 
   @Get(':id')
   findOne(@Param('id', ParseObjectIdPipe) id: string) {
     return this.moviesService.findOne(id);
   }
}
