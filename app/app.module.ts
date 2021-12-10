/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { FilmesModule } from '../src/filmes/filmes.module';
import { GeneroModule } from '../src/genero/genero.module';
import { ParticipanteModule } from '../src/participante/participante.module';

@Module({
  imports: [FilmesModule, ParticipanteModule, GeneroModule],
  controllers: [],
  providers: [],
})
export class AppModule {}