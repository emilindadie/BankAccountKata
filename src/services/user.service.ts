import { getConnection } from "typeorm";
import { User } from "../entity/user";
import { CreateUserDto } from "../model/user";

export class UserService {
    async checkIfEmailExist(email : string) : Promise<Boolean>{
       const users = await getConnection().getRepository(User).find({ where: { email: email } });
       if(users.length > 0){
           return true
       }
       return false;
    }


    createUser(createUserDto : CreateUserDto) {
        return [];
    }
}
