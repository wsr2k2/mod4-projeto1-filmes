/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { Genero } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class GeneroService {
  constructor(private prisma: PrismaService) {}
  
  async create(createGeneroDto: CreateGeneroDto): Promise<Genero> {
    return await this.prisma.genero.create({
      data: { ...createGeneroDto},
    })
  }

  async findAll(): Promise<Genero[]> {
    return await this.prisma.genero.findMany();
  }

  async findOne(id: number): Promise<Genero> {
    return await this.prisma.genero.findUnique({ where: {id}});
  }

  async update(id: number, updateGeneroDto: UpdateGeneroDto): Promise<Genero> {
    return await this.prisma.genero.update({data:{ ...updateGeneroDto},
    where: {id}
    });
  }

  async remove(id: number) {
    return await this.prisma.genero.delete({ where: {id}});
  }
}
