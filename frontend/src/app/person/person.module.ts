import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';




@NgModule({
  declarations: [PersonDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule
  ],
  exports: [PersonDetailsComponent],
})
export class PersonModule { }
