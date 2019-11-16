import { RequestHandler } from 'express';
import * as passport from 'passport';
import { AccountController } from 'src/controllers/account/account';

export class AccountRoute {
    public accountController: AccountController = new AccountController();
    public routes(app): void {
        app.route('/account').post(this.protectedRoute(), this.accountController.creacteAccount);
    }
    private protectedRoute() {
        const jwtAuth: RequestHandler = passport.authenticate('jwt', {
            session: false,
        });
        return jwtAuth;
    }
}
