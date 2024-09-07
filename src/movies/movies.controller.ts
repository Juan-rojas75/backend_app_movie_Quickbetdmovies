import { Controller, Get, Post, Body, Patch, Param, Delete, Req } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Request } from 'express';

@Controller('movies')
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
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(+id, updateMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.remove(+id);
  }
}
