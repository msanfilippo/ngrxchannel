import {Application} from 'express';
import {bMessages} from "../data/data";
import {channelqueue} from "../data/data";
import {Message} from "../../../shared/model/message";
import {findChannelById} from "../crud/findChannelById";

let messageIdCounter = 30;

export function saveNewMessage(app: Application) {

  app.route('/api/channels/:id').post((req, res) => {
    console.log("POST : /api/channels");
    const payload = req.body;

    const channelId = parseInt(req.params.id),
      userId = Number(req.headers['userid']);

    const message: Message = {
      id: Math.random(),
      channelId,
      userId,
      body: payload.body,
      timestamp: new Date().getTime()
    };

    bMessages[message.id] = message;

    channelqueue[channelId].push(userId + "#" + message.id.toString());

    const channel = findChannelById(channelId);

    channel.messageIds.push(message.id);

    res.status(200).send();

  });

}
