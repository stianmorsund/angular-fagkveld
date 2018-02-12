import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { CitizensService } from './citizen-service/citizens.service';
import { CitizenListComponent } from './citizen-list/citizen-list.component';
import { CitizenSingleComponent } from './citizen-single/citizen-single.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CitizenListComponent, CitizenSingleComponent],
  exports: [CitizenListComponent],
  providers: [CitizensService]
})
export class CitizensModule { }
