import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OrderByPipe } from './order-by.pipe';
import { NgpSortModule } from "ngp-sort-pipe";

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgpSortModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, OrderByPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
