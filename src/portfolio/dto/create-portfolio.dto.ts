import { IsString, IsNotEmpty, IsArray, IsOptional } from 'class-validator';

export class CreatePortfolioDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsArray()
  @IsString({ each: true })
  skills: string[];

  @IsArray()
  @IsOptional()
  experiences?: any[];

  @IsArray()
  @IsOptional()
  projects?: any[];
}
