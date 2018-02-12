import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { FilterService } from './filter-service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    declarations: [],
    exports: [],
    providers: [
        FilterService
    ]
})
export class CoreModule {
    constructor() { }
}
