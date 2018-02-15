import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ApplicationState} from "../../store/application-state";
import {Store} from "@ngrx/store";
import {ChannelSelectedAction, LoadChannelsAction} from "../../store/actions";
import {ChannelVM} from "./channelVM";
import {stateToChannelVMSelector} from "./stateToChannelVMSelector";
import {selectedChannelSelector} from "./selectedChannelSelector";

@Component({
  selector: 'app-channelselector',
  templateUrl: './channelselector.component.html',
  styleUrls: ['./channelselector.component.css']
})
export class ChannelselectorComponent implements OnInit {

  channelList$:Observable<ChannelVM[]>;
  selectedChannel: Observable<string>;

  constructor(private store: Store<ApplicationState>) {
    this.selectedChannel = store.select(selectedChannelSelector);
    this.channelList$ = store.select(stateToChannelVMSelector);
  }

  ngOnInit() {
    this.store.dispatch(new LoadChannelsAction());
  }

  onChannelSelected(selectedChannelId:number) {
    this.store.dispatch(new ChannelSelectedAction(selectedChannelId));
  }

}
