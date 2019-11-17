import { AccountController } from 'src/controllers/account/account';
import { BaseRoute } from '../base/base';

export class AccountRoute extends BaseRoute {
    public accountController: AccountController = new AccountController();
    public routes(app): void {
        app.route('/account').post(super.protectedRoute(), this.accountController.creacteAccount);
        app.route('/account/:id/save').post(super.protectedRoute(), this.accountController.saveMoney);
        app.route('/account').get(super.protectedRoute(), this.accountController.getAllAccount);
        app.route('/account/:id/receive').post(super.protectedRoute(), this.accountController.receiveMoney);
    }
}
