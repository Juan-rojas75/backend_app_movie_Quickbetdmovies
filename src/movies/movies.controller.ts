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
   async findMovieDetail(@Param('id') id: number) {
    try {
      // Obtener detalles de la película
      const movieDetail = await this.moviesService.getMoviesDetails(id);
      // Buscar la película en la base de datos
      const movieInDb = await this.moviesService.findOneIdMovie(movieDetail.id);
      movieDetail.fav = false
      // Marcar como favorita si está en la base de datos
      if (movieInDb) {
        movieDetail.fav = true;
        movieDetail.id_movie = movieInDb.id_movie;
      }
      
      return movieDetail;
    } catch (error) {
      // Manejo de errores
      throw new Error(`Error fetching movie details: ${error.message}`);
    }
  }

   @Post()
   create(@Body() createMovieDto: CreateMovieDto) {
     return this.moviesService.create(createMovieDto);
   }

   @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.remove(id);
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
