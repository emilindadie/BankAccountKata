import { CreateUserDto } from 'dist/model/user/user';

export class CreateAccountDto {
    name: string;
    user: CreateUserDto;
}
