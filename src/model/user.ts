 
export class CreateUserDto {
  
    name: string;

    email: string;

    address: string;
 
    accountNumber?: string;

    password: string;

    money: number = 0;
}