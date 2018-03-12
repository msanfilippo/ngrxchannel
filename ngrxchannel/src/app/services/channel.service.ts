import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AllUserData} from "../../../shared/to/all-user-data";
import {httpHeaders} from "./httpHeaders";
import {Http} from "@angular/http";
import {SendNewMessageActionPayload} from "../store/actions";
import {Message} from "../../../shared/model/message";

@Injectable()
export class ChannelService {

  constructor(private http: Http) { }

  loadChannels(): Observable<AllUserData> {
    return this.http.get('/api/channels', httpHeaders(null))
      .map(res => res.json());
  }

  saveNewMessage(payload: SendNewMessageActionPayload): Observable<any> {
    return this.http.post(`/api/channels/${payload.channelId}`,
      JSON.stringify({body:payload.body}),
      httpHeaders(null));
  }

  loadNewMessagesByChannelID(channelID:number): Observable<Message[]>{
    return this.http.post('/api/channel/messages', null, httpHeaders(channelID))
      .map(res => res.json().payload);
  }

}

