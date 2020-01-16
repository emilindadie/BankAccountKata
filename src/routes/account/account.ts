import { AccountController } from 'src/controllers/account/account';
import { protectedRoute } from 'src/common/authentification';

export class AccountRoute {
    public accountController: AccountController = new AccountController();
    public routes(app): void {
        app.route('/accounts').post(protectedRoute(), this.accountController.creacteAccount);
        app.route('/accounts').get(protectedRoute(), this.accountController.getAccountByUserId);
    }
}
