import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserResp } from './resp/create-user.resp';
import { GetAllUsersResp } from './resp/get-all-users.resp';
import { GetUsersDto } from './dto/get-users.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  createUser(@Body() createDto: CreateUserDto): Promise<CreateUserResp> {
    return this.userService.createUser(createDto);
  }

  @Get('get')
  getUsers(@Query() getDto: GetUsersDto): Promise<GetAllUsersResp> {
    return this.userService.getAllUsers(getDto);
  }
}
