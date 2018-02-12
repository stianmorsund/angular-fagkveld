import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenListComponent } from './citizen-list.component';
import { CitizenSingleComponent } from '../citizen-single/citizen-single.component';
import { CitizensModule } from '../citizens.module';
import { CoreModule } from '../../core/core.module';

describe('CitizensComponent', () => {
  let component: CitizenListComponent;
  let fixture: ComponentFixture<CitizenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        CitizensModule],
      declarations: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitizenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
