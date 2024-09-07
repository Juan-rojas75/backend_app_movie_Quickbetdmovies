import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 
import { Auth } from 'src/auth/schemas/auth.schemas';
import mongoose from 'mongoose';

export type MovieDocument = Movie & Document; 

@Schema() 
export class Movie {

  @Prop({unique:true,required:true})
  id_movie: number;

  @Prop({required:true})
  poster_path: string;

  @Prop({required:true})
  title: string;

  @Prop({required:true})
  release_date: string;
  
  @Prop({required:true})
  vote_average: number;

  @Prop({required:true})
  fav: boolean;

  @Prop({ type: mongoose.Schema.Types.String, ref: 'Auths' }) 
  username: Auth;
}

export const MovieSchema = SchemaFactory.createForClass(Movie); 