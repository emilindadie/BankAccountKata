import { AccountEntity } from '../../entity/account';
import { getManager } from 'typeorm';
import { CreateAccountDto } from '../../model/account/account';
import { Account } from 'src/model/account/account.i';
import { createUserDto } from 'src/test-files';

export class AccountService {

    haveName(name: string) {
        if (name && name.length > 0) {
            return true;
        }
        return false;
    }

    async createAccount(createAccountDto: CreateAccountDto): Promise<Account> {
        const haveName = await this.haveName(createAccountDto.name);
        if (!haveName) {
            throw new Error('Le compte doit avoir un nom!');
        }
        return await getManager().getRepository(AccountEntity).save(createAccountDto);
    }
}
