import { CreateWithDrawDto } from '../../model/operation/withdraw';
import { CreateDepositDto } from '../../model/operation/deposit';
import { getManager } from 'typeorm';
import { WithdrawEntity } from '../../entity/operation/withdraw';
import { DepositeEntity } from '../../entity/operation/deposite';

export class OperationService {

    async createWithDrawOperation(createWithDrawDto: CreateWithDrawDto) {
        return await getManager().getRepository(WithdrawEntity).save(createWithDrawDto);
    }

    async createDepositOperation(createDepositDto: CreateDepositDto) {
        return await getManager().getRepository(DepositeEntity).save(createDepositDto);
    }
}
