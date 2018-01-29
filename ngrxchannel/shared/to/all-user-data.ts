import {Message} from "../model/message";
import {User} from "../model/user";
import {Channel} from "../model/channel";

export interface AllUserData {
  users: User[];
  channels: Channel[];
  messages: Message[];
}
