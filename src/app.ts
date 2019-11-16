import * as dotenv from 'dotenv';
import * as express from 'express';
import * as path from 'path';
import 'reflect-metadata';
import {createConnection} from 'typeorm';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import { UserEntity } from 'src/entity/user';
import { IndexRoute } from './routes/index/index';
import { UserRoute } from './routes/user/user';
import configurePassport from './config';
import { AccountEntity } from './entity/account';
import { AccountRoute } from './routes/account/account';

class App {
  public app: express.Application;
  public indexRoutes: IndexRoute = new IndexRoute();
  public userRoutes: UserRoute = new UserRoute();
  public accountRoutes: AccountRoute = new AccountRoute();

  constructor() {
    this.app = express();
    this.config();
    this.indexRoutes.routes(this.app);
    this.userRoutes.routes(this.app);
    this.accountRoutes.routes(this.app);
  }
  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(cookieParser()); // read cookies (needed for auth)
    this.app.use(bodyParser.urlencoded({ extended: false }));
    configurePassport(this.app);
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', 'ejs');
    dotenv.config();
    createConnection({
      type: 'mysql',
      host: process.env.HOST,
      port: Number(process.env.PORT),
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [
        UserEntity,
        AccountEntity,
      ],
      synchronize: true,
      logging: false,
    }).then(connection => {
      // here you can start to work with your entities
      console.log('Connected');
    }).catch(error => console.log(error));
  }
}

export default new App().app;
