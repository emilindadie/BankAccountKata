import { getConnection } from "typeorm";
import { User } from "../entity/user";

export class UserService {
    async checkIfEmailExist(email : string){
       const users = await getConnection().getRepository(User).find({ where: { email: email } });
       if(users.length > 0){
           return true
       }
       return false;
    }
}
