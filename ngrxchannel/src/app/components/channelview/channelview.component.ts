import { Component, OnInit } from '@angular/core';
import {ApplicationState} from "../../store/application-state";
import {Store} from "@ngrx/store";
import {MessageVM} from "../channel-messages/messageVM";
import {Observable} from "rxjs/Observable";
import {channelSelector} from "./channelSelector";
import {UiState} from "../../store/ui-state";
import {SendNewMessageAction} from "../../store/actions";

@Component({
  selector: 'app-channelview',
  templateUrl: './channelview.component.html',
  styleUrls: ['./channelview.component.css']
})
export class ChannelviewComponent implements OnInit {

  messages$: Observable<MessageVM[]>;
  uiState:UiState;


  constructor(private store: Store<ApplicationState>) {

    this.messages$ = store.select(channelSelector);
    store.subscribe(state => this.uiState = Object.assign({}, state.uiState) );
  }

  ngOnInit() {
  }

  onNewMessage(inputMessage:any) {

    this.store.dispatch(new SendNewMessageAction({body:inputMessage.value, channelId: this.uiState.currentThreadId,
      userId: this.uiState.userId}));
    inputMessage.value = '';

  }

}
