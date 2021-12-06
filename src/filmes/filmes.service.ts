/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateFilmeDto } from "./dto/create-filme.dto";
import { UpdateFilmeDto } from "./dto/update-filme.dto";
import { Filme } from "@prisma/client";
import { PrismaService } from "../prisma/prisma.service";

const lista = [];

@Injectable()
export class FilmesService {
  constructor(private prisma: PrismaService) {}
  
    create(createFilmeDto: CreateFilmeDto) {
    lista.push(createFilmeDto);
    return `Filme adicionado com sucesso: ${createFilmeDto.nome}`;
  }

  async createPrisma(createFilmeDto: CreateFilmeDto): Promise<Filme> {
    return await this.prisma.filme.create({
      data: { ...createFilmeDto },
    });
  }

  async findAllPrisma(): Promise<Filme[]> {
    return await this.prisma.filme.findMany();
  }

  async findOnePrisma(id: number): Promise<Filme> {
    return await this.prisma.filme.findUnique({ where: {id}});
  }

  async updatePrisma(id: number, updateFilmeDto: UpdateFilmeDto): Promise<Filme> {
    return await this.prisma.filme.update({
      data:{...updateFilmeDto},
      where:{id}
    });
  }

  async removePrisma(id: number) {
    return await this.prisma.filme.delete({ where: {id}});
  }
}
