import {StoreData} from "../store-data";
import {Action} from "@ngrx/store";
import {
  CHANNELS_LOADED_ACTION,
  ChannelsLoadedAction, SEND_NEW_MESSAGE_ACTION, SendNewMessageAction
} from "../actions";
import * as _ from 'lodash';
import {Message} from "../../../../shared/model/message";


const uuid = require('uuid');

export function storeData(state: StoreData, action:Action) : StoreData {
  switch (action.type)  {

    case CHANNELS_LOADED_ACTION:
      return handleLoadUserThreadsAction(state, <any>action);

    case SEND_NEW_MESSAGE_ACTION:
      return handleSendNewMessageAction(state, <any>action);

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


function handleSendNewMessageAction(state:StoreData, action: SendNewMessageAction) {

  const newStoreState = _.cloneDeep(state);

  const currentThread = newStoreState.channels[action.payload.channelId];

  const newMessage: Message = {
    body: action.payload.body,
    channelId: action.payload.channelId,
    userId: action.payload.userId,
    timestamp: new Date().getTime(),
    id:uuid()
  };

  currentThread.messageIds.push(newMessage.id);

  newStoreState.messages[newMessage.id] = newMessage;

  return newStoreState;
}




