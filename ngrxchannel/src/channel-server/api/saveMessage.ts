import {Application} from 'express';
import {bMessages} from "../data/data";
import {Message} from "../../../shared/model/message";
import {findChannelById} from "../crud/findChannelById";

let messageIdCounter = 30;

export function saveNewMessage(app: Application) {

  app.route('/api/channels/:id').post((req, res) => {
    console.log("POST : /api/channels");
    const payload = req.body;

    const channelId = parseInt(req.params.id),
      userId = null;

    const message: Message = {
      id: messageIdCounter++,
      channelId,
      userId,
      body: payload.body,
      timestamp: new Date().getTime()
    };

    bMessages[message.id] = message;

    console.log("Mensaje + " + JSON.stringify(message));
    console.log("")

    const channel = findChannelById(channelId);

    console.log("Canal encontrado : " + JSON.stringify(channel));

    channel.messageIds.push(message.id);


    res.status(200).send();

  });

}
