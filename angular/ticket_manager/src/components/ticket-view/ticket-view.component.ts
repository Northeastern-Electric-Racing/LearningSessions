import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import TicketManager from "src/services/manager.service";
import { Ticket } from "src/utils/ticket";

@Component({
   selector: 'ticket-view',
   templateUrl: './ticket-view.component.html',
   styleUrls: ['./ticket-view.component.css']
})
export default class TicketView {
   ticket?: Ticket;
   isError: boolean = false;
   errorMessage: string = '';

   constructor(private route: ActivatedRoute, private manager: TicketManager) {
      const ticketName = this.route.snapshot.paramMap.get('name');
      if (!ticketName) {
         this.isError = true;
         this.errorMessage = 'Ticket Name Not Given';
      } else {
         const ticket = this.manager.getTicket(ticketName);
         if (!ticket) {
            this.isError = true;
            this.errorMessage = 'Ticket Not Found';
         } else {
            this.ticket = ticket;
         }
      }
   }
}