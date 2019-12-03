import { OperationService } from '../operation/operation';
import { Operation } from 'src/model/operation/operation.i';

export class BalanceService {

    operationService: OperationService;
    constructor(operationService: OperationService) {
        this.operationService = operationService;
    }

    async getBalanceByAccountId(accountId: number, startDate?: Date, endDate?: Date, localDate?: Date): Promise<number> {
        const operations: Operation[] = await this.operationService.getOperationByAccountId(accountId, startDate, endDate, localDate);
        const balance = (operations.map(operation => operation.amount).reduce((a, b) => a + b));
        return balance;
    }
}
