import { CreateUserDto } from "../user/user";

export class CreateAccountDto {
    name: string;
    user: CreateUserDto;
}
