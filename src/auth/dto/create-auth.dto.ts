import { ApiProperty } from '@nestjs/swagger';
export class CreateAuthDto {

  @ApiProperty({ 
    example: 'usernameexample',
  })
  readonly username: string; 

  @ApiProperty({ example: 'password' })
  password: string;

  @ApiProperty({
    example:
      'example@correo.com.co',
  })
  readonly email: string;

  @ApiProperty({ example: 'ACTIVE' })
  readonly status: string;

}