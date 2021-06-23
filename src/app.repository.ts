import { Injectable } from '@nestjs/common';
import User from './User.entity';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppRepository {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.repo.find();
  }

  async register(userDto): Promise<User> {
    return await this.repo.save(userDto);
  }

  async updateUser(userDto, id): Promise<User | string> {
    let user = await this.repo.findOne({ id });

    if (!user) {
      return 'No user found';
    } else {
      if (userDto.name) user.name = userDto.name;
      if (userDto.email) user.email = userDto.email;
      if (userDto.contact) user.contact = userDto.contact;
      await this.repo.save(user);
      return user;
    }
  }

  async deleteUser(id): Promise<string> {
    await this.repo.delete({ id });
    return 'User successfully deleted';
  }
}
