import { AccountEntity } from '../../entity/account';
import { getManager } from 'typeorm';
import { CreateAccountDto } from '../../model/account/account';
import { Account } from '../../model/account/account.i';

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

    async getAllAccount(): Promise<Account[]> {
        return await getManager().getRepository(AccountEntity).find();
    }

    canIncreaseSolde(money: number) {
        if (money > 0 && money != null) {
            return true;
        }
        return false;
    }

    saveMoney(money: number) {
        return "";
    }
}
