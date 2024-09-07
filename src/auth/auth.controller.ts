import { Req } from '@nestjs/common';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ParseObjectIdPipe } from 'src/utilities/parse-object-id.pipe';
import { SignAuthDto } from './dto/sign-auth.dto';

@Controller('auth')
@ApiTags('auth') 
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Get()
  findAll(@Req() request: Request) {
    return this.authService.findAll(request);
  }

  @Get(':id')
  findOne(@Param('id',ParseObjectIdPipe) id: string) {
    return this.authService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseObjectIdPipe) id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseObjectIdPipe) id: string) {
    return this.authService.remove(id);
  }

  @Post('login')
  async login(@Body() signAuthDto: SignAuthDto) {
    console.log("Se recibe",signAuthDto)
    return this.authService.login(signAuthDto);
  }

}
