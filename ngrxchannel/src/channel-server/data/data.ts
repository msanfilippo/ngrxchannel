
import {User} from "../../../shared/model/user";
import {Channel} from "../../../shared/model/channel";
import {Message} from "../../../shared/model/message";

export const users: {[key: number]: User} = {
    1: {
        id: 1,
        name: 'Lars von Trier'
    },
    2: {
        id: 2,
        name: 'Philip K. Dick'
    }
};

export const bChannels: {[key: number]: Channel} = {
  1: {
    id: 1,
    name: '#dev',
    messageIds: [1, 2],
    users: {
      1: 0,
      2: 0
    }
  },
  2: {
    id: 2,
    name : 'deployment',
    messageIds: [3,4],
    users: {
      1: 0,
      2: 0
    }

  }
};


export const bMessages: {[key: number]: Message} = {

  1: {
    id: 1,
    channelId: 1,
    userId: 1,
    body: 'Hola??',
    timestamp: new Date().getTime()

  },
  2: {
    id: 2,
    channelId: 1,
    userId: 2,
    body: 'Hola??',
    timestamp: new Date().getTime()
  },
  3: {
    id: 3,
    channelId: 1,
    userId: 1,
    body: 'Hola?? ',
    timestamp: new Date().getTime()
  },
  4: {
    id: 4,
    channelId: 1,
    userId: 2,
    body: 'Hola??',
    timestamp: new Date().getTime()
  }

};

export const channelqueue: {[key: number]: {[key: number]: number[]}} = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: []
};
