import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserResp } from './resp/create-user.resp';
import { GetAllUsersResp } from './resp/get-all-users.resp';
import { GetUsersDto } from './dto/get-users.dto';
import { GetUserResp } from './resp/get-user.resp';
import { GetUserDto } from './dto/get-user.dto';
import { User } from './user.model';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('')
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

  @Get('get/:id')
  getUserById(@Param() getDto: GetUserDto): Promise<GetUserResp> {
    return this.userService.getUserById(getDto);
  }

  @Patch('update/:id')
  updateUser(
    @Param() getDto: GetUserDto,
    @Body() updateDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.updateUser(getDto, updateDto);
  }

  @Delete('delete/:id')
  deleteUser(@Param() getDto: GetUserDto): Promise<User> {
    return this.userService.deleteUser(getDto);
  }

  @Delete('delete')
  deleteAllUsers(): Promise<undefined> {
    return this.userService.deleteAllUsers();
  }
}
