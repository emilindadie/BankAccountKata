import { IndexController } from "src/controllers/index/index";

export class IndexRoute {
    public indexController: IndexController = new IndexController();
    
    public routes(app): void {
        app.route("/").get(this.indexController.index);
    }
}