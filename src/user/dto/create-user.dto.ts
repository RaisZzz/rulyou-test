import {
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';
import { fullNameLength, roleLength } from '../user.model';

export class CreateUserDto {
  @IsString()
  @MaxLength(fullNameLength)
  @IsNotEmpty()
  readonly full_name: string;

  @IsString()
  @MaxLength(roleLength)
  @IsNotEmpty()
  readonly role: string;

  @IsInt()
  @Min(2_147_483_648 * -1)
  @Max(2_147_483_647)
  readonly efficiency: number;
}
