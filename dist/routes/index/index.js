"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_controller_1 = require("src/controllers/index/index.controller");
class IndexRoute {
    constructor() {
        this.indexController = new index_controller_1.IndexController();
    }
    routes(app) {
        app.route("/").get(this.indexController.index);
    }
}
exports.IndexRoute = IndexRoute;
//# sourceMappingURL=index.js.map