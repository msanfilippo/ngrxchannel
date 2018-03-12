import {Action} from "@ngrx/store";
import {AllUserData} from "../../../shared/to/all-user-data";
import {Message} from "../../../shared/model/message";


export const CHANNELS_LOADED_ACTION = 'CHANNELS_LOADED_ACTION';
export const LOAD_CHANNELS_ACTION = 'LOAD_CHANNELS_ACTION';
export const CHANNEL_SELECTED_ACTION = 'CHANNEL_SELECTED_ACTION';
export const SEND_NEW_MESSAGE_ACTION = 'SEND_NEW_MESSAGE_ACTION';
export const NEW_MESSAGES_ACTION = 'NEW_MESSAGES_RECEIVED_ACTION';


export class LoadChannelsAction implements  Action {

  readonly type = LOAD_CHANNELS_ACTION;

  constructor(public payload?:number) {
  }

}

export class ChannelsLoadedAction implements Action {

  readonly type = CHANNELS_LOADED_ACTION;

  constructor(public payload?:AllUserData) {

  }

}

export class  ChannelSelectedAction implements Action {

  readonly type = CHANNEL_SELECTED_ACTION;

  constructor(public payload: number) {

  }

}

export interface SendNewMessageActionPayload {
  body:string;
  channelId: number;
  userId: number;
}


export class SendNewMessageAction implements Action {
  readonly type = SEND_NEW_MESSAGE_ACTION;
  constructor(public payload?: SendNewMessageActionPayload) {

  }
}

export class NewMessagesAction implements Action {
  readonly type = NEW_MESSAGES_ACTION;

  constructor(public payload?: Message[]) {

  }
}

