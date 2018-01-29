import { Component, OnInit } from '@angular/core';
import {ApplicationState} from "../../store/application-state";
import {Store} from "@ngrx/store";
import {MessageVM} from "../channel-messages/messageVM";
import {Observable} from "rxjs/Observable";
import {channelSelector} from "./channelSelector";

@Component({
  selector: 'app-channelview',
  templateUrl: './channelview.component.html',
  styleUrls: ['./channelview.component.css']
})
export class ChannelviewComponent implements OnInit {

  messages$: Observable<MessageVM[]>;

  constructor(private store: Store<ApplicationState>) {

    this.messages$ = store.select(channelSelector);
  }

  ngOnInit() {
  }

}
