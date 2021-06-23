import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import UserDto from './dto/user.dto';
import User from './User.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getUsers(): Promise<User[]> {
    return this.appService.getUsers();
  }

  @Post('register')
  register(@Body() userDto: UserDto): Promise<User> {
    return this.appService.register(userDto);
  }

  @Put('/update/:id')
  updateUser(
    @Body() userDto: UserDto,
    @Param('id') id,
  ): Promise<User | string> {
    return this.appService.updateUser(userDto, id);
  }

  @Delete('/delete/:id')
  deleteUser(@Param('id') id): Promise<string> {
    return this.appService.deleteUser(id);
  }
}
