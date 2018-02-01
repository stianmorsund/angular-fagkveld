import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitizensComponent } from './citizens.component';
import { CitizensService } from './citizens.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CitizensComponent],
  exports: [CitizensComponent],
  providers: [CitizensService]
})
export class CitizensModule { }
