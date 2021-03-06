import {Application} from "express";
import * as express from 'express';
import {getChannels} from "./api/getChannels";
import {saveNewMessage} from "./api/saveMessage";
import {newMessage} from "./api/newMessage";
const bodyParser = require('body-parser');

const app: Application = express();

app.use(bodyParser.json());

getChannels(app);
saveNewMessage(app);
newMessage(app);

app.listen(8088, () => {
  console.log('Sever running on port : 8088');
});
