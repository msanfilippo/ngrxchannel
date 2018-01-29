import {Headers} from "@angular/http";

export function httpHeaders(user: string) {
  const headers = new Headers();
  headers.append('USERID',user);
  headers.append('Content-Type', 'application/json; charset=utf-8');
  return {headers};
}
