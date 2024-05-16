import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCarDto {
  @IsString({ message: 'The brand most be a cool string' })
  @IsOptional()
  @IsNotEmpty()
  readonly brand?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  readonly model?: string;
}
