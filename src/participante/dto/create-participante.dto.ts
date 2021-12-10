import { IsBoolean, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateParticipanteDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  imagem: string;

  @IsNotEmpty()
  @IsString()
  nascimento: string;

  @IsNotEmpty()
  @IsBoolean()
  staff_ator: boolean;

  @IsNotEmpty()
  @IsInt()
  filmeid: number;
}
