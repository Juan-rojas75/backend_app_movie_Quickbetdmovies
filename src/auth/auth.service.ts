import { Injectable , UnauthorizedException  } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

import { InjectModel } from '@nestjs/mongoose';
import { Auth, AuthDocument } from './schemas/auth.schemas';
import { Model } from 'mongoose';
import { Request } from 'express'; 
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SignAuthDto } from './dto/sign-auth.dto';

@Injectable()
export class AuthService {

  constructor( 
    @InjectModel(Auth.name) private readonly authModel: Model<AuthDocument>, 
    private readonly jwtService: JwtService,
  ) {}

  //AUTENTICACION
  async login(signAuthDto: SignAuthDto): Promise<{ access_token: string }> {
    const { username, password } = signAuthDto;

    // Buscar el usuario por nombre de usuario
    const user = await this.authModel.findOne({ username }).exec();
    if (!user) {
      throw new UnauthorizedException('Invalid username or password');
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password as string, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid username or password');
    }

    // Generar el token JWT
    const payload = { username: user.username, sub: user._id };
    const access_token = this.jwtService.sign(payload);

    return { access_token };
  }

  async create(createAuthDto: CreateAuthDto): Promise<Auth> { 
    createAuthDto.password = await bcrypt.hash(createAuthDto.password,10)
    return this.authModel.create(createAuthDto); 
  }

  async findAll(request: Request): Promise<Auth[]> { 
    return this.authModel
      .find(request.query) 
      .setOptions({ sanitizeFilter: true }) 
      .exec();
  }

  async findOne(id: string): Promise<Auth> { 
    return this.authModel.findOne({ _id: id }).exec(); 
  }

  async update(id: string, updateAuthDto: UpdateAuthDto): Promise<Auth> { 
    return this.authModel.findOneAndUpdate({ _id: id }, updateAuthDto, { 
      new: true, 
    });
  }

  async remove(id: string) { 
    return this.authModel.findByIdAndDelete({ _id: id }).exec(); 
  }
}
