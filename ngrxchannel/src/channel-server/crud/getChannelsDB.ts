import {channels} from "../data/data";
import * as _ from 'lodash';
import {Channel} from "../../../shared/model/channel";

export function getChannelsDB() {

  const bchannels: Channel[] = _.values<Channel>(channels);
  return bchannels;
}
