import { IsArray, IsInt, IsNotEmpty, IsString } from "class-validator";
export class CreateFilmeDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  imagem: string;

  @IsNotEmpty()
  @IsString()
  data_lancamento: string;

  @IsNotEmpty()
  @IsString()
  tempo_duracao: string;

  @IsNotEmpty()
  genero: string;

  @IsNotEmpty()
  participantes: string;
}
