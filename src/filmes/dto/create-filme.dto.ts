import { IsArray, IsInt, IsNotEmpty, IsString } from "class-validator";
export class CreateFilmeDto {
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  imagem: string;

  @IsNotEmpty()
  @IsInt()
  data_lancamento: number;

  @IsNotEmpty()
  @IsString()
  tempo_duracao: string;

  @IsNotEmpty()
  @IsArray()
  genero: [];

  @IsNotEmpty()
  @IsArray()
  participantes: [];
}
