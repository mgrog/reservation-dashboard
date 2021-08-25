import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TimeSlot } from '../../interfaces/time-slot';

@Component({
  selector: 'app-timeslot-selector',
  templateUrl: './timeslot-selector.component.html',
  styleUrls: ['./timeslot-selector.component.scss'],
})
export class TimeslotSelectorComponent implements OnInit {
  @Input() reservation: TimeSlot;
  @Output() reserveSlot = new EventEmitter<TimeSlot>();
  @Output() availableSlots = new EventEmitter<TimeSlot[]>();

  timeSlots: TimeSlot[];
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  times = [
    '9:00am',
    '10:00am',
    '11:00am',
    '12:00pm',
    '1:00pm',
    '2:00pm',
    '3:00pm',
    '4:00pm',
  ];
  customers = [
    'Bob Vance',
    'Michael Scott',
    'Dwight Schrute',
    'Jim Halpert',
    'Pam Beasley',
    'Stanley Hudson',
  ];
  colPos = 2;

  constructor() {}

  ngOnInit(): void {
    this.timeSlots = [];
    this.times.forEach((time) => {
      this.days.forEach((day) => {
        const takenTimes = ['9:00am', '11:00am', '2:00pm', '3:00pm'];
        const list = this.customers;
        let customer = list[Math.floor(Math.random() * list.length)];
        if (
          (day === 'Monday' || day === 'Wednesday') &&
          takenTimes.includes(time)
        ) {
          this.timeSlots.push({ day, time, isAvailable: false, customer });
        } else {
          this.timeSlots.push({ day, time, isAvailable: true, customer: '' });
        }
      });
    });
    this.updateAvailableTimes();
  }

  incrementColPos(): number {
    if (this.colPos > 6) {
      this.colPos = 2;
    }
    return this.colPos++;
  }

  reserve(slot: TimeSlot): void {
    if (!slot.isAvailable) {
      return;
    }
    if (this.reservation) {
      this.reservation.isAvailable = true;
      this.reservation.customer = '';
    }
    slot.isAvailable = false;
    slot.customer = 'pending';
    this.reservation = slot;
    this.reserveSlot.emit(this.reservation);
    this.updateAvailableTimes();
  }

  updateAvailableTimes(): void {
    const available = this.timeSlots.filter(
      (slot) => slot.isAvailable || slot.customer === 'pending'
    );
    this.availableSlots.emit(available);
  }
}
