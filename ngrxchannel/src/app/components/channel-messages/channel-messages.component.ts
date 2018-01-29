import {Component, Input, OnInit} from '@angular/core';
import {MessageVM} from "./messageVM";

@Component({
  selector: 'app-channel-messages',
  templateUrl: './channel-messages.component.html',
  styleUrls: ['./channel-messages.component.css']
})
export class ChannelMessagesComponent implements OnInit {

  @Input()
  messages: MessageVM[];

  constructor() { }

  ngOnInit() {
  }

}
