"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const index_1 = require("src/routes/index");
const bodyParser = require("body-parser");
const user_1 = require("src/entity/user");
class App {
    constructor() {
        this.indexRoutes = new index_1.IndexRoute();
        this.app = express();
        this.config();
        this.indexRoutes.routes(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.set('view engine', 'ejs');
        dotenv.config();
        typeorm_1.createConnection({
            type: "mysql",
            host: process.env.HOST,
            port: Number(process.env.PORT),
            username: process.env.USERNAME,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            entities: [
                user_1.User
            ],
            synchronize: true,
            logging: false
        }).then(connection => {
            console.log("Connected");
        }).catch(error => console.log(error));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map