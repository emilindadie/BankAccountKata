import { BaseRoute } from '../base/base';
import { BalanceController } from 'src/controllers/balance/balance';

export class BalanceRoute extends BaseRoute {
    public balanceController: BalanceController = new BalanceController();
    public routes(app): void {
        app.route('/balance').get(super.protectedRoute(), this.balanceController.getBalanceByAccountId);
    }
}
