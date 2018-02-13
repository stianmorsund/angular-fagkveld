import { Component, OnInit } from '@angular/core';

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

  constructor(
    private citizenService: CitizensService,
    private filterService: FilterService
  ) { }

  ngOnInit() {
    this.citizenService.currentCitizens().subscribe((citizens: Citizen[]) => {
      this.citizens = this.filteredCitizens = citizens;
    });
  }

  filterChanged(query: string): void {
    this.filteredCitizens = this.filterService.filter(query, this.citizens);
  }

}
