import {Headers} from "@angular/http";

export function httpHeaders(channelID: number) {
  const chanID = channelID != null ? channelID.toString() : null;
  const headers = new Headers();
  headers.append('channelID',chanID);
  headers.append('userID', sessionStorage.getItem("tabID"));
  headers.append('Content-Type', 'application/json; charset=utf-8');
  return {headers};
}
