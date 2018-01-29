import {Action} from "@ngrx/store";
import {AllUserData} from "../../../shared/to/all-user-data";


export const CHANNELS_LOADED_ACTION = 'CHANNELS_LOADED_ACTION';
export const LOAD_CHANNELS_ACTION = 'LOAD_CHANNELS_ACTION';
export const CHANNEL_SELECTED_ACTION = 'CHANNEL_SELECTED_ACTION';


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


