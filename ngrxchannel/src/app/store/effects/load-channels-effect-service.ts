import { Injectable } from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import {
  ChannelsLoadedAction, LOAD_CHANNELS_ACTION, LoadChannelsAction
} from "../actions";
import {Observable} from "rxjs";
import {Action} from "@ngrx/store";
import {ChannelService} from "../../services/channel.service";


@Injectable()
export class LoadChannelsEffectService {

  constructor(private actions$: Actions, private channelService: ChannelService) {
  }

  @Effect() channels$: Observable<Action> = this.actions$
    .ofType<LoadChannelsAction>(LOAD_CHANNELS_ACTION)
    .switchMap(action => this.channelService.loadChannels())
    .map(allUserData => new ChannelsLoadedAction(allUserData) );
}
