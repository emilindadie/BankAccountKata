import { AccountService } from 'src/services/account/account';
import { Request, Response } from 'express';
import { OperationService } from 'src/services/operation/operation';
import { operationType } from 'src/type/operation';
import { CreateOperationDto } from 'src/model/operation/operation';
import { Account } from 'src/model/account/account.i';

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

    public async updateSolde(req: Request, res: Response) {
        const accountService = new AccountService();
        const operationService = new OperationService();
        const accountId = Number(req.params.id);
        const amount = Number(req.body['amount']);
        try {
            const updateSoldeResponse = await accountService.updateSolde(accountId, amount);
            const operation = new CreateOperationDto();
            operation.account = updateSoldeResponse;
            operation.amount = amount;
            operation.type = amount > 0 ? operationType.withdraw : operationType.deposit;
            operation.date = new Date();
            try {
                const createOperationResponse = await operationService.createOperation(operation);
                res.send({ data: createOperationResponse });
            } catch (e) {
                res.send({ error: e.message });
            }
        } catch (e) {
            res.send({ error: e.message });
        }
    }

    public async getAccountByUserId(req: Request, res: Response) {
        const accountService = new AccountService();
        const userId = Number(req.params.id);
        try {
            const userAccountResponse: Account[] = await accountService.getAccountByUserId(userId);
            res.send({
                data: userAccountResponse,
            });
        } catch (e) {
            res.send({ error: e.message });
        }
    }
}
