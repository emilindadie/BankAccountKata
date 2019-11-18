import { OperationController } from '../../controllers/operation/operation';
import { BaseRoute } from '../base/base';

export class OperationRoute extends BaseRoute {
    public operationController: OperationController = new OperationController();
    public routes(app): void {
        app.route('/operation/:id').get(super.protectedRoute(), this.operationController.getOperationById);
    }
}
