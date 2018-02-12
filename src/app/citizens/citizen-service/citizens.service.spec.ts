import { TestBed, inject } from '@angular/core/testing';

import { CitizensService } from './citizens.service';

describe('CitizensService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CitizensService]
    });
  });

  it('should be created', inject([CitizensService], (service: CitizensService) => {
    expect(service).toBeTruthy();
  }));
});
