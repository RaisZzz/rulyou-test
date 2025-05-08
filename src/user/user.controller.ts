import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserResp } from './resp/create-user.resp';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  createUser(@Body() createDto: CreateUserDto): Promise<CreateUserResp> {
    return this.userService.createUser(createDto);
  }
}
