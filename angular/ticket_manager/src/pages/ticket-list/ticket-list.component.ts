import { Component } from "@angular/core";
import { Router } from "@angular/router";
import TicketManager from "src/services/manager.service";
import { Ticket } from "src/utils/ticket";

@Component({
   selector: 'ticket-list',
   templateUrl: './ticket-list.component.html',
   styleUrls: ['./ticket-list.component.css']
})
export default class TicketList {
   tickets: Ticket[] = [];

   constructor(private manager: TicketManager, private router: Router) {
      /* Subscribe to the ticket manager's tickets BehaviorSubject */
   }

   /* Link this function to a remove button in the html */
   removeTicket(ticket: Ticket) {
      this.manager.removeTicket(ticket);
   }

   /* Add a ticket with a random name and price to the ticket manager, make sure that the id is unique */
   plusButtonClicked() {

   }

   /* Go to the ticket view page */
   selectTicket(ticket: Ticket) {

   }
}
