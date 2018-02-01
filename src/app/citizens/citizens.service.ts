import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Citizen } from './citizen';
import { environment as env } from '../../environments/environment';

@Injectable()
export class CitizensService {

  constructor(
    private http: HttpClient
  ) { }

  public getCitizens(): Observable<Citizen[]> {
    return this.http.get<Citizen[]>(env.apiUrl);
  }

}
