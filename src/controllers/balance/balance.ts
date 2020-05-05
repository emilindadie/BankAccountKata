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
        const startDate =  req.query['startDate'] as Date;
        const endDate = req.query['endDate'] as Date;
        const localDate = req.query['localDate'] as Date;
        try {
            if (startDate && endDate) {
                if (startDate > endDate) {
                    res.send({ error: 'Date are invalid' });
                } else {
                    const balanceByAccountIdResponse: number = await balanceService.getBalanceByAccountId(accountId, startDate, endDate);
                    res.send({
                        data: balanceByAccountIdResponse,
                    });
                }
            } else {
                const balanceByAccountIdResponse: number = await balanceService.getBalanceByAccountId(accountId, null, null, localDate);
                res.send({
                    data: balanceByAccountIdResponse,
                });
            }
        } catch (e) {
            res.send({ error: { message : e.message }});
        }
    }
}
