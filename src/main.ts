import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
   // Configuración de CORS
   app.enableCors({
    origin: ['http://localhost:3001','https://front-app-movie-quickbetdmovies-9ntq5owej.vercel.app'], // Cambia esto al dominio desde donde haces las solicitudes
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Habilita las cookies y credenciales si es necesario
  });

  // Configurar títulos de documentación
  const options = new DocumentBuilder() 
    .setTitle('QuickbetMovies REST API')
    .setDescription('API REST para QuickbetMovies con MongoDB')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options); 

  // La ruta en que se sirve la documentación
  SwaggerModule.setup('docs', app, document); 

  await app.listen(3000);
}
bootstrap();
