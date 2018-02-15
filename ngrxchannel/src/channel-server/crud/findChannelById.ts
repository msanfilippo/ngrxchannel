import {channels} from "../data/data";
import * as _ from 'lodash';
import {Channel} from "../../../shared/model/channel";



export function findChannelById(channelId:number) {

  const returnChannels: Channel[] = <any> _.values(channels);

  return _.find(returnChannels,thread => thread.id === channelId);
}
