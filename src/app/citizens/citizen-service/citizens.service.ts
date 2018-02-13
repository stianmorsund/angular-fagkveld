import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Citizen } from '../citizen.model';
import { environment as env } from '../../../environments/environment';

@Injectable()
export class CitizensService {

  constructor(
    private http: HttpClient
  ) { }

  private configureOptions() {
    return {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    };
  }

  public getCitizens(): Observable<Citizen[]> {
    return this.http.get<Citizen[]>(env.apiUrl);
  }

  public addCitizen(c: Citizen): Observable<any> {
    return this.http.post(env.apiUrl, c, this.configureOptions());
  }

}
