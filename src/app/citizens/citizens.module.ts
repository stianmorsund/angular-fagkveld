import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CitizensComponent } from './citizens.component';
import { CitizensService } from './citizens.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [CitizensComponent],
  exports: [CitizensComponent],
  providers: [CitizensService]
})
export class CitizensModule { }
