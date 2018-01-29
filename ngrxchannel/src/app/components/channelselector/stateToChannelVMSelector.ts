import * as _ from 'lodash';
import {Channel} from "../../../../shared/model/channel";
import {ApplicationState} from "../../store/application-state";
import {ChannelVM} from "./channelVM";

export function stateToChannelVMSelector(state: ApplicationState):ChannelVM[] {

  const channels = _.values<Channel>(state.storeData.channels);
  return channels.map(_.partial(mapThreadToThreadSummary, state));

}

function mapThreadToThreadSummary(channel:Channel): ChannelVM {

  return {
    id: channel.id,
    name: channel.name
  }
}
