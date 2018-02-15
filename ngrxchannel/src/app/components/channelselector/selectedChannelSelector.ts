

import {ApplicationState} from "../../store/application-state";

export function selectedChannelSelector(state: ApplicationState): string {

  const currentChannelId = state.uiState.currentThreadId,
    currentChannel = state.storeData.channels[currentChannelId];

  if (!currentChannel) {
    return "";
  }

  return currentChannel.name;
}
