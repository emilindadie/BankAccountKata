import { User } from "../user/user.i";

export class CreateAccountDto {
    name: string;
    solde: number = 0;
    user:  User;
}
