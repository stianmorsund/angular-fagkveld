import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CitizensService } from './citizens.service';
import { CoreModule } from '../../core/core.module';
import { CitizensModule } from '../citizens.module';

describe('CitizensService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        CoreModule,
        CitizensModule
      ],
      providers: []
    });
  });

  it('should be created', inject([CitizensService], (service: CitizensService) => {
    expect(service).toBeTruthy();
  }));
});
