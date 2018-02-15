import {Application,Request,Response} from 'express';
import {getChannelsDB} from "../crud/getChannelsDB";
import {bMessages} from "../data/data";
import * as _ from 'lodash';
import {Message} from "../../../shared/model/message";
import {AllUserData} from "../../../shared/to/all-user-data";

export function getChannels(app:Application) {

  app.route('/api/channels').get((req: Request, res: Response) => {
    console.log("GET : /api/channels");
    const channels = getChannelsDB();

    let messages: Message[] = [],
      users: string[] = [];

    channels.forEach(thread => {

      const channelMessages: Message[] = _.filter(bMessages, (message:any) => message.channelId == thread.id);

      messages = messages.concat(channelMessages);

    });

    const response: AllUserData = {
      users : null,
      messages :messages,
      channels: channels
    };

    res.status(200).json(response);

  });


}
