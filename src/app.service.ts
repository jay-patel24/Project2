import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';
import User from './User.entity';

@Injectable()
export class AppService {
  constructor(private readonly appRepository: AppRepository) {}

  getUsers(): Promise<User[]> {
    return this.appRepository.getUsers();
  }

  register(userDto): Promise<User> {
    return this.appRepository.register(userDto);
  }

  updateUser(userDto, id): Promise<User | string> {
    return this.appRepository.updateUser(userDto, id);
  }

  deleteUser(id): Promise<string> {
    return this.appRepository.deleteUser(id);
  }
}
