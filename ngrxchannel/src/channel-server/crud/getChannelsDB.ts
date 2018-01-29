import {bChannels} from "../data/data";
import * as _ from 'lodash';
import {Channel} from "../../../shared/model/channel";

export function getChannelsDB() {

  const channels: Channel[] = _.values<Channel>(bChannels);
  return channels;
}
