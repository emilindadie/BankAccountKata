import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { OperationService } from 'src/services/operation/operation';
import { Operation } from 'src/model/operation/operation.i';

export class OperationController {
    public OperationController() {
        dotenv.config();
    }

    public async getOperationById(req: Request, res: Response) {
        const operationService = new OperationService();
        const operationId = Number(req.params.id);
        try {
            const operationByIdResponse: Operation = await operationService.getOperationById(operationId);
            res.send({
                data: operationByIdResponse,
            });
        } catch (e) {
            res.send({ error: e.message });
        }
    }
}
