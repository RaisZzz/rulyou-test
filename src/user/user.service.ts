import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserResp } from './resp/create-user.resp';
import { GetAllUsersResp } from './resp/get-all-users.resp';
import { GetUsersDto } from './dto/get-users.dto';
import { WhereOptions } from 'sequelize';
import { GetUserResp } from './resp/get-user.resp';
import { GetUserDto } from './dto/get-user.dto';
import { ErrorResponse, ErrorType } from '../common/resp/error.resp';
import { UpdateUserDto } from './dto/update-user.dto';

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

  async getUserById(getDto: GetUserDto): Promise<GetUserResp> {
    const user: User | null = await this.userRepository.findOne({
      where: { id: getDto.id },
    });
    return { users: user ? [user] : [] };
  }

  async updateUser(
    getDto: GetUserDto,
    updateDto: UpdateUserDto,
  ): Promise<User> {
    const user: User | null = await this.userRepository.findOne({
      where: {
        id: getDto.id,
      },
    });

    if (!user) {
      throw new HttpException(
        new ErrorResponse(ErrorType.USER_NOT_FOUND),
        HttpStatus.NOT_FOUND,
      );
    }

    await user.update(updateDto);

    return user;
  }

  async deleteUser(getDto: GetUserDto): Promise<User> {
    const user: User | null = await this.userRepository.findOne({
      where: {
        id: getDto.id,
      },
    });

    if (!user) {
      throw new HttpException(
        new ErrorResponse(ErrorType.USER_NOT_FOUND),
        HttpStatus.NOT_FOUND,
      );
    }

    await user.destroy();

    return user;
  }
}
