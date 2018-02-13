import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { CitizensService } from '../citizen-service/citizens.service';
import { Citizen } from '../citizen.model';
import { FilterService } from '../../core/filter-service/filter-service';


@Component({
    selector: 'andeby-citizen-add',
    templateUrl: './citizen-add.component.html',
    styleUrls: ['./citizen-add.component.scss'],
    animations: [
        trigger('state', [
            state('hide', style({
                opacity: 0,
                transform: 'translateY(-50px)',
                display: 'none'
            })),
            state('show', style({
                opacity: 1,
                transform: 'translateY(0)',
                display: 'block'
            })),
            transition('hide => show', animate('250ms ease-in')),
            transition('show => hide', animate('150ms ease-out'))
        ])
    ]
})
export class CitizenAddComponent implements OnInit {
    public model: Citizen = {
        name: '',
        job: '',
        age: null
    };
    public state = 'hide';

    @ViewChild('citizenForm') public citizenForm: NgForm;

    constructor(
        private citizenService: CitizensService
    ) { }

    ngOnInit() {

    }

    onSubmit(): void {
        if (this.citizenForm.valid) {
            const newCitizen: Citizen = {
                name: this.model.name,
                job: this.model.job,
                age: this.model.age
            };
            this.citizenService.addCitizen(newCitizen);
            this.citizenForm.reset();
            this.toggleForm();
        }
    }

    toggleForm($event?: any): void {
        this.state = (this.state === 'show') ? 'hide' : 'show';
    }
}
