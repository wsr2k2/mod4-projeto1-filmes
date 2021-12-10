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
  
  async create(createFilmeDto: CreateFilmeDto): Promise<Filme> {
    return await this.prisma.filme.create({
      data: { ...createFilmeDto },
    });
  }

  async findAll(): Promise<Filme[]> {
    return await this.prisma.filme.findMany();
  }

  async findOne(id: number): Promise<Filme> {
    return await this.prisma.filme.findUnique({ where: {id}});
  }

  async update(id: number, updateFilmeDto: UpdateFilmeDto): Promise<Filme> {
    return await this.prisma.filme.update({
      data:{...updateFilmeDto},
      where:{id}
    });
  }

  async remove(id: number) {
    return await this.prisma.filme.delete({ where: {id}});
  }
}
