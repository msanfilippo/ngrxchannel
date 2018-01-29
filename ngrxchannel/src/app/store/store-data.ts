import {Message} from "../../../shared/model/message";
import {User} from "../../../shared/model/user";
import {Channel} from "../../../shared/model/channel";

export interface StoreData {

  users: {[key:number]: User};
  channels: {[key:number]: Channel};
  messages: {[key:number]:Message};

}

export const INITIAL_STORE_DATA: StoreData = {

  channels: {},
  messages: {},
  users: {}
};
