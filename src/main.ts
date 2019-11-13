import * as dotenv from 'dotenv';
import * as express from 'express';
import * as path from 'path';
import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/user";

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

createConnection({
  type: "mysql",
  host: process.env.HOST,
  port: Number(process.env.PORT),
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  entities: [
      User
  ],
  synchronize: true,
  logging: false
}).then(connection => {
  // here you can start to work with your entities
  console.log("Connected");
}).catch(error => console.log(error));

const app = express();

// Configure Express to use EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// define a route handler for the default home page
app.get('/', (req, res) => {
  // render the index template
  res.render('index', { title: 'BankAcountApi' });
});

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
