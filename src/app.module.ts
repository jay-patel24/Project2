import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppRepository } from './app.repository';
import { AppService } from './app.service';
import User from './User.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'project1_database',
      entities: [User],
      synchronize: true,
    }),

    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService, AppRepository],
})
export class AppModule {}
