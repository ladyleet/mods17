import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
// import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { asap } from 'rxjs/scheduler/asap';

export class Gde {
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

  constructor(private http: Http) { 
  }
  
  getGdes (): Observable<Gde[]> {
    return this.http.get(`https://gde-assistant.firebaseio.com/gdes.json`)
    .map(res => res.json())  
  }
}


//