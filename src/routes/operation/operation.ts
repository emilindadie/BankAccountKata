import { OperationController } from '../../controllers/operation/operation';
import { protectedRoute } from 'src/common/authentification';

export class OperationRoute {
    public operationController: OperationController = new OperationController();
    public routes(app): void {
        app.route('/operations/:id').get(protectedRoute(), this.operationController.getOperationById);
        app.route('/operations').post(protectedRoute(), this.operationController.createOperation);
        app.route('/operations').get(protectedRoute(), this.operationController.getOperationByAccountId);
    }
}
