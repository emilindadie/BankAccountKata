import { AccountService } from 'src/services/account/account';
import { Request, Response } from 'express';

export class AccountController {
    public async creacteAccount(req: Request, res: Response) {
        const accountService = new AccountService();
        const account = req.body;
        try {
            const createAccountResponse = await accountService.createAccount(account);
            res.send({ data: createAccountResponse });
        } catch (e) {
            res.send({ error: e.message });
        }
    }

    public async getAllAccount(req: Request, res: Response) {
        const accountService = new AccountService();
        try {
            const getAllAccountResponse = await accountService.getAllAccount();
            res.send({ data: getAllAccountResponse });
        } catch (e) {
            res.send({ error: e.message });
        }
    }

    public async saveMoney(req: Request, res: Response) {
        const accountService = new AccountService();
        const accountId = Number(req.params.id);
        const money = Number(req.body['amount']);
        try {
            const saveMoneyResponse = await accountService.saveMoney(accountId, money);
            res.send({ data: saveMoneyResponse });
        } catch (e) {
            res.send({ error: e.message });
        }
    }

    public async receiveMoney(req: Request, res: Response) {
        const accountService = new AccountService();
        const accountId = Number(req.params.id);
        const money = Number(req.body['amount']);
        try {
            const saveMoneyResponse = await accountService.getMoney(accountId, money);
            res.send({ data: saveMoneyResponse });
        } catch (e) {
            res.send({ error: e.message });
        }
    }
}
