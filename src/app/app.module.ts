import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// For making reqs
import { HttpClientModule } from '@angular/common/http';

// For input
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputDataComponent } from './input-data/input-data.component';
import { OutputTableComponent } from './output-table/output-table.component';

@NgModule({
  declarations: [AppComponent, InputDataComponent, OutputTableComponent],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
