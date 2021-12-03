import { Injectable } from '@nestjs/common';
import { CreateFilmeDto } from './dto/create-filme.dto';
import { UpdateFilmeDto } from './dto/update-filme.dto';

const lista = [];

@Injectable()
export class FilmesService {
  create(createFilmeDto: CreateFilmeDto) {
    lista.push(createFilmeDto);
    return `Filme adicionado com sucesso: ${createFilmeDto.nome}`;
  }

  findAll() {
    return lista;
  }

  findOne(id: number) {
    return lista[id];
  }

  update(id: number, updateFilmeDto: UpdateFilmeDto) {
    return `This action updates a #${id} filme`;
  }

  remove(id: number) {
    delete lista[id];
    return `Deletado com sucesso: ${id}`;
  }
}
