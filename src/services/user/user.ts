import { getManager } from 'typeorm';
import { UserEntity } from '../../entity/user';
import { CreateUserDto } from '../../model/user/user';
import { User } from '../../model/user/user.i';
import * as bcrypt from 'bcrypt';
import * as dotenv from 'dotenv';
import { AccountEntity } from '../../entity/account';
import { Account } from '../../model/account/account.i';

export class UserService {

    constructor() {
        dotenv.config();
    }
    async checkIfEmailExist(email: string): Promise<boolean> {
        const users = await getManager().getRepository(UserEntity).findOne({ email });
        if (users) {
            return true;
        }
        return false;
    }
    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const emailExist = await this.checkIfEmailExist(createUserDto.email);
        if (emailExist) {
            throw new Error('L\'email existe deja!');
        }
        createUserDto.password = await this.cryptPassword(createUserDto.password);
        const createUserResponse = await getManager().getRepository(UserEntity).save(createUserDto);
        delete createUserResponse.password;
        return createUserResponse;
    }
    async cryptPassword(password: string): Promise<string> {
        return await bcrypt.hash(password, Number(process.env.SALT)).then((hash) => hash);
    }
    async comparePassword(password: string, hashpassword: string): Promise<boolean> {
        const match = await bcrypt.compare(password, hashpassword);
        if (match) {
            return true;
        }
        return false;
    }
    async logUser(email: string, password: string): Promise<User> {
        const user = await getManager().getRepository(UserEntity).findOne({ email });
        if (!user) {
            throw new Error('L\'email ou le mot de passe est incorrect!');
        }
        const canLogin = await this.comparePassword(password, user.password);
        if (canLogin) {
            delete user.password;
            return user;
        }
        throw new Error('L\'email ou le mot de passe est incorrect!');
    }

    async getUserAccount(userId: number): Promise<Account[]> {
        return await getManager().getRepository(AccountEntity).find({ where: { userId } });
    }
}
