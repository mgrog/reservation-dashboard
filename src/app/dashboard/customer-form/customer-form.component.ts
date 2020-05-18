import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { stateDictionary } from 'src/data/state-dictionary';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {
  @Input() parentForm: FormGroup;
  stateSelected: string;
  // dictionaries
  usStates = stateDictionary;
  constructor() {}

  ngOnInit(): void {}
}
