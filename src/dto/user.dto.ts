import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export default class UserDto {
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsNotEmpty()
  @Length(10)
  readonly contact: string;
}
