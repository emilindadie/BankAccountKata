import { AccountController } from 'src/controllers/account/account';
import { BaseRoute } from '../base/base';

export class AccountRoute extends BaseRoute {
    public accountController: AccountController = new AccountController();
    public routes(app): void {
        app.route('/account').post(super.protectedRoute(), this.accountController.creacteAccount);
        app.route('/account/:id').post(super.protectedRoute(), this.accountController.updateSolde);
        app.route('/:id/account').get(super.protectedRoute(), this.accountController.getAccountByUserId);
    }
}
