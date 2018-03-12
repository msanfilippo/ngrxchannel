import {StoreData} from "../store-data";
import {Action} from "@ngrx/store";
import {
  CHANNELS_LOADED_ACTION,
  ChannelsLoadedAction, NEW_MESSAGES_ACTION, NewMessagesAction, SEND_NEW_MESSAGE_ACTION, SendNewMessageAction
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

    case NEW_MESSAGES_ACTION:
      return handleNewMessageAction(state, <any>action);

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

function handleNewMessageAction(state:StoreData, action: NewMessagesAction){

  const newStoreState: StoreData = {
    users: state.users,
    channels: _.clone(state.channels),
    messages: _.clone(state.messages)
  };

  const newMessages = action.payload;

  console.log("Mensajes a leer: " + JSON.stringify(newMessages));

  newMessages.forEach(message => {

    newStoreState.messages[message.id] = message;

    newStoreState.channels[message.channelId] = _.clone(newStoreState.channels[message.channelId]);

    const messageThread = newStoreState.channels[message.channelId];

    messageThread.messageIds = _.clone(messageThread.messageIds);
    messageThread.messageIds.push(message.id);

  });

  return newStoreState;

}




