import * as dotenv from 'dotenv';
import * as express from 'express';
import * as path from 'path';
import "reflect-metadata";
import {createConnection, getConnection} from "typeorm";
import { IndexRoute } from 'src/routes/index';
import bodyParser = require('body-parser');
import { UserEntity } from 'src/entity/user';
import { UserService } from './services/user.service';

class App {
  public app: express.Application;
  public indexRoutes: IndexRoute = new IndexRoute();

  constructor() {
    this.app = express();
    this.config();
    this.indexRoutes.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', 'ejs');
    dotenv.config();

    createConnection({
      type: "mysql",
      host: process.env.HOST,
      port: Number(process.env.PORT),
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [
        UserEntity
      ],
      synchronize: true,
      logging: false
    }).then(connection => {
      // here you can start to work with your entities
      console.log("Connected");
    }).catch(error => console.log(error));
  }
}

export default new App().app;