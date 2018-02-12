import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Citizen } from '../citizen.model';

@Component({
  selector: 'andeby-citizen-single',
  templateUrl: './citizen-single.component.html',
  styleUrls: ['./citizen-single.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CitizenSingleComponent implements OnInit {

  @Input()
  citizen: Citizen;

  constructor() { }

  ngOnInit() {
  }

}
