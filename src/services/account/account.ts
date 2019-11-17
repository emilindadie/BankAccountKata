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

    verifyMoney(money: number) {
        if (money > 0 && money != null) {
            return true;
        }
        return false;
    }

    async saveMoney(accountId: number, money: number): Promise<Account> {
        const canSave = this.verifyMoney(money);
        if (!canSave) {
            throw new Error('Money négatif ou null');
        }
        return await this.makeSaveMoney(accountId, money);
    }

    async makeSaveMoney(accountId: number, money: number): Promise<Account> {
        const account = await this.getAccountById(accountId);
        account.solde += money;
        return await account.save();
    }

    async getMoney(accountId: number, money: number): Promise<Account> {
        const canGet = this.verifyMoney(money);
        if (!canGet) {
            throw new Error('Money négatif ou null');
        }
        const account = await this.getAccountById(accountId);
        if (account.solde < money) {
            throw new Error('Vous n\'avez pas assez d\'argent sur votre compte!');
        }
        return await this.makeGetMoney(accountId, money);
    }

    async makeGetMoney(accountId: number, money: number): Promise<Account> {
        const account = await this.getAccountById(accountId);
        account.solde += money;
        return await account.save();
    }

    async getAccountById(id: number) {
        return await getManager().getRepository(AccountEntity).findOne({ id });
    }
}
