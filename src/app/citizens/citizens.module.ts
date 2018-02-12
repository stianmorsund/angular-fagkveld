import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitizensComponent } from './citizens.component';
import { CitizensService } from './citizens.service';
import { DuckComponent } from './duck/duck.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CitizensComponent, DuckComponent],
  exports: [CitizensComponent],
  providers: [CitizensService]
})
export class CitizensModule { }
