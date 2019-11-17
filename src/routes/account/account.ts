import { RequestHandler } from 'express';
import * as passport from 'passport';
import { AccountController } from 'src/controllers/account/account';

export class AccountRoute {
    public accountController: AccountController = new AccountController();
    public routes(app): void {
        app.route('/account').post(this.protectedRoute(), this.accountController.creacteAccount);
        app.route('/account/:id').post(this.protectedRoute(), this.accountController.saveMoney);
        app.route('/account').get(this.protectedRoute(), this.accountController.getAllAccount);
    }
    private protectedRoute() {
        const jwtAuth: RequestHandler = passport.authenticate('jwt', {
            session: false,
        });
        return jwtAuth;
    }
}
