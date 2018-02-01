import { Injectable } from '@angular/core';
import { Citizen } from '../citizens/citizen';

@Injectable()
export class FilterService {
    constructor() { }

    filter(query: string, citizens: Citizen[]): Citizen[] {
        return citizens.filter(c =>
            (c.name && c.name.toLowerCase().indexOf(query) > -1) ||
            (c.job && c.job.toLowerCase().indexOf(query) > -1)
        );
    }
}
