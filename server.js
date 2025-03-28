import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import routes from './routes';

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use('/', routes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});