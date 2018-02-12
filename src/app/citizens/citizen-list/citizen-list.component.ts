import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { CitizensService } from '../citizen-service/citizens.service';
import { Citizen } from '../citizen.model';
import { FilterService } from '../../core/filter-service/filter-service';


@Component({
  selector: 'andeby-citizen-list',
  templateUrl: './citizen-list.component.html',
  styleUrls: ['./citizen-list.component.scss']
})
export class CitizenListComponent implements OnInit {

  public citizens: Citizen[];
  public filteredCitizens: Citizen[];
  public  model: Citizen = {
      name: '',
      job: '',
      age: null
    }
  public showForm = false;

  @ViewChild('citizenForm') public citizenForm: NgForm;

  constructor(
    private citizenService: CitizensService,
    private filterService: FilterService
  ) { }

  ngOnInit() {
    this.citizenService.getCitizens().subscribe((citizens: Citizen[]) => {
      this.citizens = this.filteredCitizens = citizens;
    });
  }

  filterChanged(query: string): void {
    this.filteredCitizens = this.filterService.filter(query, this.citizens);
  }

  onSubmit(): void {
    if (this.citizenForm.valid) {
      const newcitizens = Object.assign({}, this.model);
      this.citizens.push(newcitizens);
      this.citizenForm.reset();
      this.showForm = false;
    }
  }

}
