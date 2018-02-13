import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/finally';

import { Citizen } from '../citizen.model';
import { environment as env } from '../../../environments/environment';

@Injectable()
export class CitizensService {
  private _currentCitizens = new Subject<Citizen[]>();

  constructor(
    private http: HttpClient
  ) {
    this.getCitizens();
  }

  private configureOptions() {
    return {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    };
  }

  public currentCitizens(): Observable<Citizen[]> {
    return this._currentCitizens.asObservable();
  }

  public getCitizens(): void {
    this.http.get<Citizen[]>(env.apiUrl).subscribe((citizens: Citizen[]) => {
      this._currentCitizens.next(citizens);
    });
  }

  public addCitizen(c: Citizen) {
    return this.http.post(env.apiUrl, c, this.configureOptions())
      .finally(() => this.getCitizens()); // After request is done, reload update list of citizen from server
  }

}
