import { Component, OnInit } from '@angular/core';

import { CitizensService } from './citizens.service';
import { Citizen } from './citizen';
import { FilterService } from '../core/filter-service';

@Component({
  selector: 'andeby-citizens',
  templateUrl: './citizens.component.html',
  styleUrls: ['./citizens.component.scss']
})
export class CitizensComponent implements OnInit {

  public citizens: Citizen[];
  public filteredCitizens: Citizen[];

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

}
