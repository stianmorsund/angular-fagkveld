import { TestBed, inject } from '@angular/core/testing';
import { FilterService } from './filter-service';
import { Citizen } from '../../citizens/citizen.model';

describe('FilterService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
            ],
            providers: [
                FilterService
            ]
        });
    });

    it('should be created', inject([FilterService], (service: FilterService) => {
        expect(service).toBeTruthy();
    }));

    it('should return filtered list when searching', inject([FilterService], (service: FilterService) => {

        const list: Citizen[] = [
            {
                name: 'Donald Duck',
                job: 'Meierifabrikken',
                age: 59
            },
            {
                name: 'Petter Smart',
                job: 'Smarte Oppfinnelser AS',
                age: 42
            },
            {
                name: 'Skrue McDuck',
                job: 'Pengebingen Invest AS',
                age: 95
            }
        ];

        const result: Citizen[] = service.filter('Donald', list);

        expect(result.length).toBe(1);
        expect(result[0].name).toBe('Donald Duck');
    }));

});
