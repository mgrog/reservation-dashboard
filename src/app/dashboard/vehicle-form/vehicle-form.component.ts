import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { stateDictionary, colorDictionary, makeDictionary } from 'src/data';
import { TimeSlot } from 'src/app/interfaces/time-slot';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.scss'],
})
export class VehicleFormComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() availableTimes: TimeSlot[];
  @Output() goToTab = new EventEmitter<number>();

  stateSelected: string;
  // dictionaries
  vehicleMakes = makeDictionary;
  colors = colorDictionary;
  usStates = stateDictionary;

  constructor() {}

  ngOnInit(): void {}

  onCheckAvailability() {
    this.goToTab.emit(2);
  }
}
