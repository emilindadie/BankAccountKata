import {Repository } from "typeorm";
import { UserEntity } from "../entity/user";
import { CreateUserDto } from "../model/user";
import { User } from "../model/user.i";

export class UserService {
    private userRepository : Repository<UserEntity>;

    constructor(){
        this.userRepository = new Repository<UserEntity>()
    }

    async checkIfEmailExist(email : string) : Promise<Boolean>{
       const users = await this.userRepository.find({ where: { email: email } });
       if(users.length > 0){
           return true
       }
       return false;
    }

    async createUser(createUserDto : CreateUserDto) : Promise<User>{
        const emailExist = await this.checkIfEmailExist(createUserDto.email);
        if(emailExist){
            throw new Error("L'email existe déja");
        }
        return await  this.userRepository.save(createUserDto);
    }
}
