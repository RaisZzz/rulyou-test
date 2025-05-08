import { IsInt, Max, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class GetUserDto {
  @IsInt()
  @Min(1)
  @Max(2_147_483_647)
  @Type(() => Number)
  readonly id: number;
}
