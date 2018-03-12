import {Application} from 'express';
import {channelqueue, bMessages} from "../data/data";
import * as _ from 'lodash';

export function newMessage(app: Application) {


  app.route('/api/channel/messages').post((req, res) => {

    console.log(JSON.stringify(req.headers));

    const channelID = req.headers['channelid'];
    const userID = req.headers['userid'];

    if (!channelID) {
      res.status(200).json({payload:[]});
      return;
    }

    const unreadMessageIds = channelqueue[Number(channelID)];

    const filteredMessageIds = _.filter(unreadMessageIds, function(i) { return !i.includes(userID.toString()); });
    const finalFilter: Array<string> = new Array();

    filteredMessageIds.forEach(filtered =>{
      finalFilter.push(filtered.substring(filtered.indexOf("#")+1, filtered.length));
    });

    const unreadMessages = finalFilter.map( messageId => bMessages[messageId]);
    channelqueue[Number(channelID)] = _.remove(channelqueue[Number(channelID)], item => !item.includes(userID.toString()));

    res.status(200).json({payload: unreadMessages});

  });

}
