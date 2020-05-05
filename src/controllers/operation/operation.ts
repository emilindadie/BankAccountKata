import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { OperationService } from 'src/services/operation/operation';
import { Operation } from 'src/model/operation/operation.i';
import { AccountService } from 'src/services/account/account';

export class OperationController {
    public OperationController() {
        dotenv.config();
    }

    public async createOperation(req: Request, res: Response) {
        const operationService = new OperationService(new AccountService());
        const accountId = Number(req.body['accountId']);
        const amount = Number(req.body['amount']);
        try {
            const createOperationResponse = await operationService.createOperation(accountId, amount);
            res.send({
                data: createOperationResponse,
            });
        } catch (e) {
            res.send({ error: { message : e.message }});
        }
    }

    public async getOperationById(req: Request, res: Response) {
        const operationService = new OperationService(new AccountService());
        const operationId = Number(req.params.id);
        try {
            const operationByIdResponse: Operation = await operationService.getOperationById(operationId);
            res.send({
                data: operationByIdResponse,
            });
        } catch (e) {
            res.send({ error: { message : e.message }});
        }
    }

    public async getOperationByAccountId(req: Request, res: Response) {
        const operationService = new OperationService(new AccountService);
        const accountId = Number(req.query['accountId']);
        const startDate = String(req.query['startDate']);
        const endDate =  String(req.query['endDate']);
        const localDate = String(req.query['localDate']);

        try {
            if (startDate && endDate) {
                if (new Date(startDate) > new Date(endDate)) {
                    res.send({ error: 'Invalid date' });
                } else {
                    const operationByAccountIdResponse: Operation[] = await operationService.getOperationByAccountId(accountId, new Date(startDate), new Date(endDate));
                    res.send({
                        data: operationByAccountIdResponse,
                    });
                }
            } else {
                const operationByAccountIdResponse: Operation[] = await operationService.getOperationByAccountId(accountId, null, null, new Date(localDate));
                res.send({
                    data: operationByAccountIdResponse,
                });
            }
        } catch (e) {
            res.send({ error: { message : e.message }});
        }
    }
}
