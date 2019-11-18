import { AccountEntity } from '../../entity/account/account';
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

    async updateSolde(accountId: number, amount: number): Promise<Account> {
        const account = await this.getAccountById(accountId);
        return await this.makeUpdateMoney(account, amount);
    }

    async makeUpdateMoney(account: any, amount: number): Promise<Account> {
        account.solde += amount;
        if (account.solde < 0) {
            throw new Error('Votre solde est insuffisant!');
        }
        return await account.save();
    }

    async getAccountById(id: number): Promise<Account> {
        return await getManager().getRepository(AccountEntity).findOne({ id });
    }

    async updateAccount(account: AccountEntity): Promise<Account> {
        return await getManager().getRepository(AccountEntity).save(AccountEntity);
    }

    async getAccountByUserId(userId: number): Promise<Account[]> {
        return await getManager().getRepository(AccountEntity).find({ where: { userId } });
    }
}
