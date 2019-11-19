import { getManager } from 'typeorm';
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
        const operation = new CreateOperationDto();
        operation.account = account;
        operation.amount = amount;
        operation.type = amount > 0 ? operationType.deposit : operationType.withdraw;
        operation.date = new Date();
        const createOperation = await getManager().getRepository(OperationEntity).save(operation);
        if (createOperation) {
            await this.accountService.updateSolde(account, amount);
            return createOperation;
        }
    }

    async getOperationById(id: number) {
        return await getManager().getRepository(OperationEntity).findOne({ id });
    }

    async getOperationByAccountId(accountId: number) {
        return await getManager().getRepository(OperationEntity).find({ where: { accountId } });
    }
}
