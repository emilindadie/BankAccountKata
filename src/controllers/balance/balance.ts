import { Request, Response } from 'express';
import * as dotenv from 'dotenv';

export class BalanceController {
    public BalanceController() {
        dotenv.config();
    }

    public async getBalanceByAccountId(req: Request, res: Response) {

    }
}
