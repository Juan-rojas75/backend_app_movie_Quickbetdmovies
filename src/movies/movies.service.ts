import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { HttpService } from '@nestjs/axios';
import { Request } from 'express'; 

@Injectable()
export class MoviesService {
  private readonly apiKey = process.env.TMDB_API_KEY
  private readonly apiUrl = 'https://api.themoviedb.org/3';

  constructor(private readonly httpService: HttpService) {}

  async getPopularMovies(page: number) {
    let url_ = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`
    const response = await this.httpService.get(url_).toPromise();
    
    return response.data;
  }

  async getMoviesDetails(id: number) {
    let url_ = `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`
    const response = await this.httpService.get(url_).toPromise();
    
    return response.data;
  }

  create(createMovieDto: CreateMovieDto) {
    return 'This action adds a new movie';
  }

  findAll() {
    return `This action returns all movies`;
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return `This action updates a #${id} movie`;
  }

  remove(id: number) {
    return `This action removes a #${id} movie`;
  }
}
