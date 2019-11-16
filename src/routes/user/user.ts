import { UserController } from '../../controllers/user/user';
import { RequestHandler } from 'express';
import * as passport from 'passport';

export class UserRoute {
    public userController: UserController = new UserController();
    public routes(app): void {
        app.route('/user').post(this.userController.creacteUser);
        app.route('/user').get(this.userController.logUser);
        app.route('/user/:id/account').get(this.protectedRoute(), this.userController.getUserAccount);
        app.route('/user/protected').get(this.protectedRoute(), this.userController.protectedRoute);
    }
    private protectedRoute() {
        const jwtAuth: RequestHandler = passport.authenticate('jwt', {
            session: false,
        });
        return jwtAuth;
    }
}
