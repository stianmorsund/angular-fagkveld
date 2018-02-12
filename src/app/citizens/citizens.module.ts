import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CitizensService } from './citizen-service/citizens.service';
import { CitizenListComponent } from './citizen-list/citizen-list.component';
import { CitizenSingleComponent } from './citizen-single/citizen-single.component';
import { CitizenAddComponent } from './citizen-add/citizen-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CitizenListComponent,
    CitizenSingleComponent,
    CitizenAddComponent
  ],
  exports: [
    CitizenListComponent,
    CitizenAddComponent
  ],
  providers: [CitizensService]
})
export class CitizensModule { }
