import { AccountController } from 'src/controllers/account/account';
import { BaseRoute } from '../base/base';

export class AccountRoute extends BaseRoute {
    public accountController: AccountController = new AccountController();
    public routes(app): void {
        app.route('/account').post(super.protectedRoute(), this.accountController.creacteAccount);
        app.route('/account').get(super.protectedRoute(), this.accountController.getAccountByUserId);
    }
}
