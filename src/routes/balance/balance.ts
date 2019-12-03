import { OperationController } from '../../controllers/operation/operation';
import { BaseRoute } from '../base/base';

export class BalanceRoute extends BaseRoute {
    public operationController: OperationController = new OperationController();
    public routes(app): void {
        app.route('/balance').get(super.protectedRoute(), this.operationController.getOperationById);
    }
}
