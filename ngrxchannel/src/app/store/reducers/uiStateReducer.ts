import {UiState, INITIAL_UI_STATE} from "../ui-state";
import {CHANNEL_SELECTED_ACTION} from "../actions";


export function uiState(state: UiState = INITIAL_UI_STATE, action: any) : UiState {

  switch (action.type)  {

    case CHANNEL_SELECTED_ACTION:

      const newState = Object.assign({}, state);

      newState.currentThreadId = action.payload;

      return newState;

    default:
      return state;
  }

}
