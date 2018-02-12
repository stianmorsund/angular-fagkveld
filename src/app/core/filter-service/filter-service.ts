import { Injectable } from '@angular/core';
import { Citizen } from '../../citizens/citizen.model';

@Injectable()
export class FilterService {
    constructor() { }

    filter(query: string, citizens: Citizen[]): Citizen[] {
        const lowerCasequery = query.toLowerCase();
        return citizens.filter(c =>
            (c.name && c.name.toLowerCase().indexOf(lowerCasequery) > -1) ||
            (c.job && c.job.toLowerCase().indexOf(lowerCasequery) > -1)
        );
    }
}
