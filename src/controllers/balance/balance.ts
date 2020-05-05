import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { BalanceService } from 'src/services/balance/balance';
import { OperationService } from 'src/services/operation/operation';
import { AccountService } from 'src/services/account/account';

export class BalanceController {
    public BalanceController() {
        dotenv.config();
    }

    public async getBalanceByAccountId(req: Request, res: Response) {
        const balanceService = new BalanceService(new OperationService(new AccountService()));
        const accountId = Number(req.query['accountId']);
        const startDate = String(req.query['startDate']); 
        const endDate = String(req.query['endDate']);
        const localDate = String(req.query['localDate']);
        try {
            if (startDate && endDate) {
                if (new Date(startDate) > new Date(endDate)) {
                    res.send({ error: 'Date are invalid' });
                } else {
                    const balanceByAccountIdResponse: number = await balanceService.getBalanceByAccountId(accountId, new Date(startDate), new Date(endDate));
                    res.send({
                        data: balanceByAccountIdResponse,
                    });
                }
            } else {
                const balanceByAccountIdResponse: number = await balanceService.getBalanceByAccountId(accountId, null, null, new Date(localDate));
                res.send({
                    data: balanceByAccountIdResponse,
                });
            }
        } catch (e) {
            res.send({ error: { message : e.message }});
        }
    }
}
