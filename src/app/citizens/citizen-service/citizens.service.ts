import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Citizen } from '../citizen.model';
import { environment as env } from '../../../environments/environment';

@Injectable()
export class CitizensService {
  private _currentCitizens = new Subject<Citizen[]>();;

  constructor(
    private http: HttpClient
  ) { }

  private configureOptions() {
    return {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    };
  }

  public currentCitizens(): Observable<Citizen[]> {
    return this._currentCitizens.asObservable();
  }

  public init(): void {
    this.http.get<Citizen[]>(env.apiUrl).subscribe((citizens: Citizen[]) => {
      this._currentCitizens.next(citizens);
    });
  }

  public addCitizen(c: Citizen): void {
    this.http.post(env.apiUrl, c, this.configureOptions()).subscribe(() => {
      // On success, reload update list of citizen from server
      this.init();
    });
  }

}
