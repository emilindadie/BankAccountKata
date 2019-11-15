import {getManager } from "typeorm";
import { UserEntity } from "../entity/user";
import { CreateUserDto } from "../model/user";
import { User } from "../model/user.i";
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';

export class UserService {

    constructor(){
        dotenv.config();
    }
    async checkIfEmailExist(email : string) : Promise<Boolean>{
       const users = await getManager().getRepository(UserEntity).find({ where: { email: email } });
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
        return await  getManager().getRepository(UserEntity).save(createUserDto);
    }



    cryptPassword(password : string) : Promise<String>{
        return bcrypt.hash(password, Number(process.env.SALT)).then(function(hash) {
            return hash;
        });
    }
}
