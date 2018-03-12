import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Effect} from "@ngrx/effects";
import {ApplicationState} from "../application-state";
import {Store} from "@ngrx/store";
import {ChannelService} from "../../services/channel.service";
import {NewMessagesAction} from "../actions";

@Injectable()
export class MessageNotificationEffectService {


  constructor(private channelService: ChannelService,private store: Store<ApplicationState>) {
  }

  @Effect() newMessages$ = Observable.interval(3000)
    .withLatestFrom(this.store.select("uiState"))
    .map(([any,uiState]) => uiState)
    .filter((uiState:any) => uiState.currentThreadId)
    .switchMap(uiState => this.channelService.loadNewMessagesByChannelID(uiState.currentThreadId))
    .map(messages => new NewMessagesAction(messages))
}
