import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 

export type AuthDocument = Auth & Document; 

@Schema() 
export class Auth {

  @Prop({unique:true,required:true})
  username: string;

  @Prop({required:true})
  password: string;

  @Prop({unique:true,required:true})
  email: string;


  @Prop({required:true})
  status: string;

}

export const AuthSchema = SchemaFactory.createForClass(Auth); 