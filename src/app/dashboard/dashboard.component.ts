import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { TimeSlot } from '../interfaces/time-slot';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [
    trigger('parent', [transition(':enter', [])]),
    trigger('dissolve', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('300ms', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
    ]),
  ],
})
export class DashboardComponent implements OnInit {
  tabSelected = 1;
  availableTimes: TimeSlot[];
  parentForm = this.fb.group({
    customerForm: this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: this.fb.group({
        street: ['', [Validators.required]],
        city: ['', [Validators.required]],
        state: ['', [Validators.required]],
        zip: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(5),
          ],
        ],
      }),
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
    }),
    vehicleForm: this.fb.group({
      make: ['', [Validators.required]],
      model: ['', [Validators.required]],
      color: ['', [Validators.required]],
      plateNumber: ['', [Validators.required]],
      vin: [''],
      registeredState: ['', [Validators.required]],
      transmission: [''],
      instructions: [''],
      pickupTime: ['', [Validators.required]],
    }),
  });

  constructor(private fb: FormBuilder) {}

  setAvailableTimes(times: TimeSlot[]) {
    this.availableTimes = times;
  }

  ngOnInit(): void {}

  get reservation() {
    return this.parentForm.get('vehicleForm').get('pickupTime').value;
  }

  set reservation(time: TimeSlot) {
    this.parentForm.get('vehicleForm').get('pickupTime').setValue(time);
  }

  onSubmit() {
    this.parentForm.markAllAsTouched();
    console.warn('to submit', this.parentForm.value);
  }

  onCancel() {
    this.parentForm.reset();
    this.parentForm.markAsPristine();
    this.parentForm.markAsUntouched();
  }

  onReserve(time: TimeSlot) {
    this.reservation = time;
  }

  onCheckAvailability(tab: number) {
    this.tabSelected = tab;
  }
}
