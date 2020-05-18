import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { CustomerFormComponent } from './dashboard/customer-form/customer-form.component';
import { VehicleFormComponent } from './dashboard/vehicle-form/vehicle-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PhoneMaskDirective } from './dashboard/customer-form/phone-mask.directive';
import { TabSelectorComponent } from './tab-selector/tab-selector.component';
import { TimeslotSelectorComponent } from './dashboard/timeslot-selector/timeslot-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerFormComponent,
    VehicleFormComponent,
    PhoneMaskDirective,
    TabSelectorComponent,
    TimeslotSelectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
  ],
  exports: [PhoneMaskDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
