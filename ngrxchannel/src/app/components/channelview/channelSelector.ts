
import * as _ from 'lodash';
import {ApplicationState} from "../../store/application-state";
import {MessageVM} from "../channel-messages/messageVM";
import {Message} from "../../../../shared/model/message";



export function channelSelector(state:ApplicationState): MessageVM[] {

  const currentThreadId = state.uiState.currentThreadId;

  if (!currentThreadId) {
    return [];
  }

  const messageIds = state.storeData.channels[state.uiState.currentThreadId].messageIds;
  const messages = messageIds.map(messageId =>  state.storeData.messages[messageId]);

  return messages.map(_.partial(mapMessageToMessageVM, state));
}



function mapMessageToMessageVM(state: ApplicationState, message:Message): MessageVM {
  return {
    id: message.id,
    body:message.body,
    timestamp: message.timestamp,
    user: state.storeData.users[message.userId].name
  };
}
