import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { fullNameLength, roleLength } from '../user.model';

export class CreateUserDto {
  @IsString()
  @MaxLength(fullNameLength)
  @IsNotEmpty()
  readonly fullName: string;

  @IsString()
  @MaxLength(roleLength)
  @IsNotEmpty()
  readonly role: string;

  @IsInt()
  readonly efficiency: number;
}
