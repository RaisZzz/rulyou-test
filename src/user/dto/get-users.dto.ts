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
import { Type } from 'class-transformer';

export class GetUsersDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(fullNameLength)
  @IsOptional()
  readonly full_name?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(roleLength)
  @IsOptional()
  readonly role?: string;

  @IsInt()
  @Min(2_147_483_648 * -1)
  @Max(2_147_483_647)
  @Type(() => Number)
  @IsOptional()
  readonly efficiency?: number;
}
