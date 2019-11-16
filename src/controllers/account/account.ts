import { AccountService } from 'src/services/account/account';
import { Request, Response } from 'express';

export class AccountController {
    public async creacteAccount(req: Request, res: Response) {
        const accountService = new AccountService();
        const account = req.body;
        try {
            const createAccountResponse = await accountService.createAccount(account);
            res.send({data : createAccountResponse });
        } catch (e) {
            res.send({error : e.message });
        }
    }
}
