import { UserController } from '../../controllers/user/user';
import { BaseRoute } from '../base/base';

export class UserRoute extends BaseRoute {
    public userController: UserController = new UserController();
    public routes(app): void {
        app.route('/user').post(this.userController.createUser);
        app.route('/user/login').post(this.userController.logUser);
        app.route('/user/protected').get(super.protectedRoute(), this.userController.protectedRoute);
    }
}
