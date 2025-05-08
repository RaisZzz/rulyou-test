import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { CreateUserDto } from './dto/create-user.dto';

export const fullNameLength: number = 255;
export const roleLength: number = 255;

@Table({ tableName: 'user', underscored: true, timestamps: false })
export class User extends Model<User, CreateUserDto> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING(fullNameLength), allowNull: false })
  fullName: string;

  @Column({ type: DataType.STRING(roleLength), allowNull: false })
  role: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  efficiency: number;
}
