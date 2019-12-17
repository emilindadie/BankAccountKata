import { getManager, Between, MoreThan, LessThan } from 'typeorm';
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
            const start = new Date(new Date(startDate).getFullYear(), new Date(startDate).getMonth(), new Date(startDate).getDay());
            const end = new Date(new Date(endDate).getFullYear(), new Date(endDate).getMonth(), new Date(endDate).getDay());
            return await getManager().getRepository(OperationEntity)
                .createQueryBuilder('operation_entity')
                .where('operation_entity.accountId= :id And operation_entity.date>= :startDate And operation_entity.date<= :endDate', 
                { id: accountId, startDate: start.toISOString(), endDate : end.toISOString() }).getMany();
        }
        const start = new Date(new Date(localDate).getFullYear(), new Date(localDate).getMonth(), 1);
        const end = new Date(new Date(localDate).getFullYear(), new Date(localDate).getMonth() + 1, 0);
        return await getManager().getRepository(OperationEntity)
            .createQueryBuilder('operation_entity')
            .where('operation_entity.accountId= :id And operation_entity.date>= :startDate And operation_entity.date<= :endDate', 
            { id: accountId, startDate: start.toISOString(), endDate : end.toISOString() }).getMany();
    }
}
