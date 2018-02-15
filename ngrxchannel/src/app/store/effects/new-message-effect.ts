import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {SEND_NEW_MESSAGE_ACTION, SendNewMessageAction} from "../actions";
import {ChannelService} from "../../services/channel.service";


@Injectable()
export class NewMessageEffectService {

  constructor(private actions$: Actions, private threadsService: ChannelService) {

  }

  @Effect({dispatch:false}) newMessages$ : Observable<any> = this.actions$
    .ofType<SendNewMessageAction>(SEND_NEW_MESSAGE_ACTION)
    .switchMap(action => this.threadsService.saveNewMessage(action.payload));

}
