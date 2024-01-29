import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import TicketList from 'src/pages/ticket-list/ticket-list.component';

@NgModule({
  declarations: [
    TicketList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [TicketList]
})
export class AppModule { }
