import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenSingleComponent } from './citizen-single.component';
import { CitizensModule } from '../citizens.module';

describe('CitizenSingleComponent', () => {
  let component: CitizenSingleComponent;
  let fixture: ComponentFixture<CitizenSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CitizensModule],
      declarations: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
