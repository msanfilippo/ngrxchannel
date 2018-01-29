import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ChannelVM} from "../channelselector/channelVM";

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {

  @Input()
  channels: ChannelVM[];

  @Output()
  channelSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  selectChannel(channelId:number) {
    this.channelSelected.next(channelId);
  }

}
