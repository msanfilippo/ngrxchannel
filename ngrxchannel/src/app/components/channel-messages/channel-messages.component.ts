import {Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MessageVM} from "./messageVM";
import * as _ from 'lodash';

@Component({
  selector: 'app-channel-messages',
  templateUrl: './channel-messages.component.html',
  styleUrls: ['./channel-messages.component.css']
})
export class ChannelMessagesComponent implements OnInit, OnChanges {

  @Input()
  messages: MessageVM[];


  @ViewChild('messageList')
  list: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['messages']) {

      const previousMessages = changes['messages'].previousValue;

      const newMessages = changes['messages'].currentValue;

      if (previousMessages && newMessages.length > previousMessages.length) {
        setTimeout(() => {
          this.scrollLastMessageIntoView();
        });
      }


    }

  }

  scrollLastMessageIntoView() {
    const items = this.list.nativeElement.querySelectorAll('li');
    const lastItem: any = _.last(items);
    if (lastItem) {
      lastItem.scrollIntoView();
    }
  }

}
