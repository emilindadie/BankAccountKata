import { UserController } from "../../controllers/user/user";

export class UserRoute {
    public userController: UserController = new UserController();
    public routes(app): void {
        app.route("/user").post(this.userController.creacteUser);
        app.route("/user").get(this.userController.logUser);
    }
}