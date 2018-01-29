import {StoreData} from "../store-data";
import {Action} from "@ngrx/store";
import {
  CHANNELS_LOADED_ACTION,
  ChannelsLoadedAction
} from "../actions";
import * as _ from 'lodash';


export function storeData(state: StoreData, action:Action) : StoreData {
  switch (action.type)  {

    case CHANNELS_LOADED_ACTION:
      return handleLoadUserThreadsAction(state, <any>action);

    default:
      return state;
  }
}


function handleLoadUserThreadsAction(state:StoreData, action: ChannelsLoadedAction): StoreData {
  return {
    users: _.keyBy(action.payload.users, 'id'),
    messages: _.keyBy(action.payload.messages, 'id'),
    channels: _.keyBy(action.payload.channels, 'id')
  };
}





