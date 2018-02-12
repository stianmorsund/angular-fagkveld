import { Component, OnInit, Input } from '@angular/core';
import { Citizen } from '../citizen.model';

@Component({
  selector: 'andeby-duck',
  templateUrl: './duck.component.html',
  styleUrls: ['./duck.component.scss']
})
export class DuckComponent implements OnInit {

  @Input()
  citizen: Citizen;

  constructor() { }

  ngOnInit() {
  }

}
