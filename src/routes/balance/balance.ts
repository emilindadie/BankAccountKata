import { BalanceController } from 'src/controllers/balance/balance';
import { protectedRoute } from 'src/common/authentification';

export class BalanceRoute {
    public balanceController: BalanceController = new BalanceController();
    public routes(app): void {
        app.route('/balances').get(protectedRoute(), this.balanceController.getBalanceByAccountId);
    }
}
