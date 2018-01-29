import {Application,Request,Response} from 'express';
import {getChannelsDB} from "../crud/getChannelsDB";

export function getChannels(app:Application) {

  app.route('/api/channels').get((req: Request, res: Response) => {
    console.log("REQUEST : /api/channels");
    const channels = getChannelsDB();
    res.status(200).json(channels);

  });


}
