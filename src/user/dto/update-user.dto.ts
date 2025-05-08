import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';
import { fullNameLength, roleLength } from '../user.model';

export class UpdateUserDto {
  @IsString()
  @MaxLength(fullNameLength)
  @IsNotEmpty()
  @IsOptional()
  readonly full_name: string;

  @IsString()
  @MaxLength(roleLength)
  @IsNotEmpty()
  @IsOptional()
  readonly role: string;

  @IsInt()
  @Min(2_147_483_648 * -1)
  @Max(2_147_483_647)
  @IsOptional()
  readonly efficiency: number;
}
