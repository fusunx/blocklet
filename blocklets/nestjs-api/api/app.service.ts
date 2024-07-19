import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { User } from './user.entity';
import { logger } from '@blocklet/sdk/lib/config';

@Injectable()
export class AppService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(): Promise<User> {
    return this.userRepository.findOne({
      where: {
        id: 1,
      },
    });
  }

  async updateUser(data: User): Promise<UpdateResult> {
    return this.userRepository.update(1, {
      username: data.username || '',
      phone: data.phone || '',
      email: data.email || '',
    });
  }

  async create(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  getHello(): string {
    return 'Hello Blocklet!';
  }
}
