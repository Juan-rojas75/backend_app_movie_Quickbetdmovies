import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { HttpService } from '@nestjs/axios';
import { Request } from 'express'; 
import { Movie, MovieDocument } from './schemas/movie.schemas';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MoviesService {
  private readonly apiKey = process.env.TMDB_API_KEY
  private readonly apiUrl = 'https://api.themoviedb.org/3';

  constructor(
    @InjectModel(Movie.name) private readonly movieModel: Model<MovieDocument>,
    private readonly httpService: HttpService) {}

  async getPopularMovies(page: number) {
    let url_ = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}&page=${page}`
    const response = await this.httpService.get(url_).toPromise();
    console.log(response.data)
    return response.data;
  }

  async getMoviesDetails(id: number) {
    let url_ = `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`
    const response = await this.httpService.get(url_).toPromise();
    
    return response.data;
  }

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    return this.movieModel.create(createMovieDto);
  }

  async findAll(request: Request): Promise<Movie[]> {
    return this.movieModel
      .find(request.query)
      .setOptions({ sanitizeFilter: true })
      .exec();
  }

  async findOne(id: string): Promise<Movie> {
    return this.movieModel.findOne({ _id: id }).exec();
  }
  async findOneIdMovie(id: number): Promise<Movie> {
    return this.movieModel.findOne({ id_movie: id }).exec();
  }

  async remove(id: string) {
    return this.movieModel.findOneAndDelete({ id_movie: Number(id) }).exec();
  }
}
