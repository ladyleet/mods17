import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

export interface Gde {
  bio: string;
  fullname: string;
  skills: string;
  roles: string;
  twitter: string;
  gplus: string;
  avatar: string;
  category: string;
  location: string  
}
@Injectable()
export class GdesService {

  constructor(public http: Http) { 
  }
  
  getGdes(): Observable<Gde[]> {
    return this.http.get(`https://gde-assistant.firebaseio.com/gdes.json`)
    .map(res => res.json());
  }

}