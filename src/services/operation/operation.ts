import { getManager } from 'typeorm';
import { OperationEntity } from '../../entity/operation/operation';
import { CreateOperationDto } from 'src/model/operation/operation';

export class OperationService {
    async createOperation(createOperationDto: CreateOperationDto) {
        return await getManager().getRepository(OperationEntity).save(createOperationDto);
    }

    async getOperationById(id: number) {
        return await getManager().getRepository(OperationEntity).findOne({ id });
    }

    async getOperationByAccountId(accountId: number) {
        return await getManager().getRepository(OperationEntity).find({ where: { accountId } });
    }
}
