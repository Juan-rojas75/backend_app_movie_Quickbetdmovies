import { ApiProperty } from '@nestjs/swagger';
export class SignAuthDto {

  @ApiProperty({ 
    example: 'usernameexample',
  })
  readonly username: string; 

  @ApiProperty({ example: 'password' })
  readonly password: string;

}