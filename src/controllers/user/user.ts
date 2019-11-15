import { UserService } from "src/services/user.service";
import { Request, Response } from "express";

export class UserController {
    public async creacteUser(req: Request, res: Response) {
        const userService = new UserService
        const user = req.body;
        try{
            const creacteUserResponse = await userService.createUser(user);
            res.send({data : creacteUserResponse });
        } catch (e){
            res.send({error : e.message });
        }
    }

    public async logUser(req: Request, res: Response) {
        const userService = new UserService
        const email = req.query['email'];
        const password = req.query['password'];
        try{
            const logUserResponse = await userService.logUser(email, password);
            res.send({data : logUserResponse });
        } catch (e){
            res.send({error : e.message });
        }
    }
}