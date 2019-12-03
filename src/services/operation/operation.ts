import { getManager, Between } from 'typeorm';
import { OperationEntity } from '../../entity/operation/operation';
import { AccountService } from '../account/account';
import { CreateOperationDto } from '../../model/operation/operation';
import { operationType } from '../../type/operation';

export class OperationService {

    accountService: AccountService;
    constructor(accountService: AccountService) {
        this.accountService = accountService;
    }
    async createOperation(accountId: number, amount: number) {
        const account = await this.accountService.getAccountById(accountId);
        const updateSolde = await this.accountService.updateSolde(account, amount);
        if (updateSolde) {
            const operation = new CreateOperationDto();
            operation.account = account;
            operation.amount = amount;
            operation.type = amount > 0 ? operationType.deposit : operationType.withdraw;
            operation.date = new Date();
            const createOperation = await getManager().getRepository(OperationEntity).save(operation);
            return createOperation;
        }
    }

    async getOperationById(id: number) {
        return await getManager().getRepository(OperationEntity).findOne({ id });
    }

    async getOperationByAccountId(accountId: number, startDate?: Date, endDate?: Date, localDate?: Date) {
        if (startDate && endDate) {
            return await getManager().getRepository(OperationEntity).find({ where: { accountId, date: Between(startDate, endDate) } });
        }
        const start = new Date(new Date(localDate).getFullYear(), new Date(localDate).getMonth(), 1);
        const end = new Date(new Date(localDate).getFullYear(), new Date(localDate).getMonth() + 1, 0);
        return await getManager().getRepository(OperationEntity).find({ where: { accountId, date: Between(start, end) } });
    }
}
