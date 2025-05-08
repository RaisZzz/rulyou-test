import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { CreateUserResp } from './resp/create-user.resp';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(createDto: CreateUserDto): Promise<CreateUserResp> {
    const user = await this.userRepository.create(createDto);
    return { id: user.id };
  }
}
