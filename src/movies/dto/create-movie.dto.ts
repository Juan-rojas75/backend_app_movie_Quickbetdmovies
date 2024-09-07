import { ApiProperty } from '@nestjs/swagger';
import { Auth } from 'src/auth/schemas/auth.schemas';
export class CreateMovieDto {

  @ApiProperty({ 
    example: 12123,
  })
  readonly id_movie: number; 

  @ApiProperty({ 
    example: 'asdadasdasdasdasd.png',
  })

  readonly poster_path: string; 

  @ApiProperty({ 
    example: 'pelicula1',
  })
  readonly title: string; 

  @ApiProperty({ 
    example: 'aaaaaaaaaaaa',
  })
  readonly release_date: string; 

  @ApiProperty({ 
    example: 1213,
  })
  readonly vote_average: number; 

  @ApiProperty({ example: true })
  fav: boolean;

  @ApiProperty({ example: 'johndoe' })
  readonly username: Auth;
}