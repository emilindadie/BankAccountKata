import { UserService } from 'src/services/user/user';
import { Request, Response } from 'express';
import * as SignOptions from 'jsonwebtoken';
import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import { User } from 'src/model/user/user.i';
import { Account } from 'src/model/account/account.i';

export class UserController {
    public UserController() {
        dotenv.config();
    }
    public async creacteUser(req: Request, res: Response) {
        const userService = new UserService();
        const user = req.body;
        try {
            const createUserResponse = await userService.createUser(user);
            res.send({data : createUserResponse });
        } catch (e) {
            res.send({error : e.message });
        }
    }
    public async logUser(req: Request, res: Response) {
        const userService = new UserService();
        const email = req.query['email'];
        const password = req.query['password'];
        try {
            const logUserResponse: User = await userService.logUser(email, password);
            const payload = { id: logUserResponse.id };
            const jwtOptions: SignOptions = { expiresIn: process.env.EXPIREIN};
            res.send({
                data: {
                    access_token: jwt.sign(payload, process.env.JWTSECRET, jwtOptions),
                    user: logUserResponse,
                },
            });
        } catch (e) {
            res.send({error: e.message });
        }
    }

    public async getUserAccount(req: Request, res: Response) {
        const userService = new UserService();
        const userId = Number(req.params.id);

        try {
            const userAccountResponse: Account[] = await userService.getUserAccount(userId);
            res.send({
                data: userAccountResponse,
            });
        } catch (e) {
            res.send({error: e.message });
        }
    }

    public async protectedRoute(req: Request, res: Response) {
        res.send({data: 'Welcome to the protected route' });
    }
}
