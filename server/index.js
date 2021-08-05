import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import rootRouter from './src/apis/router.js';
import errorHandlers from './src/common/middleware/errorHandlers.js';
import Logger from './src/common/helpers/logger.js';
import csLog from './l.js';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.get('/', function (req, res) {
  res.send({ hello: 'HELLO WORLD!' });
});

const DATABASE_URL =
  'mongodb+srv://cstech:CYTsaGXVigd5tC0h@cluster0.7bwn0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    Logger.info('database is connecting ...');
    csLog();
  })
  .catch((err) => Logger.error(`connect fail: ${err}`));

// router
rootRouter.forEach((route) => {
  app.use('/', route);
});

app.use(errorHandlers);

app.listen(PORT, function () {
  Logger.info(`server is running on port: ${PORT}`);
});
