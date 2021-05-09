import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {
  MatDatepickerModule,
  // MatDatepickerToggle,
} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { ParentComponent } from './components/parent/parent.component';
import { DataTableComponent } from './components/parent/data-table/data-table.component';
import { DataFormComponent } from './components/parent/data-form/data-form.component';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    DataTableComponent,
    DataFormComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // MatDatepickerToggle,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
