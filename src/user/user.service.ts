import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserResp } from './resp/create-user.resp';
import { GetAllUsersResp } from './resp/get-all-users.resp';
import { GetUsersDto } from './dto/get-users.dto';
import { WhereOptions } from 'sequelize';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(createDto: CreateUserDto): Promise<CreateUserResp> {
    const user = await this.userRepository.create(createDto);
    return { id: user.id };
  }

  async getAllUsers(getDto: GetUsersDto): Promise<GetAllUsersResp> {
    const where: WhereOptions<User> = {};

    if (getDto.full_name) where.full_name = getDto.full_name;
    if (getDto.role) where.role = getDto.role;
    if (getDto.efficiency) where.efficiency = getDto.efficiency;

    const users = await this.userRepository.findAll({ where });
    return { users };
  }
}
