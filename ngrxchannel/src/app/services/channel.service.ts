import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AllUserData} from "../../../shared/to/all-user-data";
import {httpHeaders} from "./httpHeaders";
import {Http} from "@angular/http";

@Injectable()
export class ChannelService {

  constructor(private http: Http) { }

  loadChannels(): Observable<AllUserData> {
    return this.http.get('/api/channels', httpHeaders("user"))
      .map(res => res.json());
  }

}

