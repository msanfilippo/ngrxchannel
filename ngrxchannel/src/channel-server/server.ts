import {Application} from "express";
import * as express from 'express';
import {getChannels} from "./api/getChannels";
const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

getChannels(app);

app.listen(8088, () => {
  console.log('Sever running on port : 8088');
});