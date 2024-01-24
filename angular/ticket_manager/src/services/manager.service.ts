import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Ticket } from "src/utils/ticket";

@Injectable({
   providedIn: 'root'
})
export default class TicketManager {
   public tickets: BehaviorSubject<Ticket[]> = new BehaviorSubject<Ticket[]>([{
      id: 0,
      name: 'Ticket 1',
      price: 10
   }]);

   constructor() { }

   addTicket(ticket: Ticket) {
      this.tickets.next([...this.tickets.value, ticket]);
   }

   removeTicket(ticket: Ticket) {
      this.tickets.next(this.tickets.value.filter(t => t.name !== ticket.name));
   }

   getTicket(name: string): Ticket | undefined { 
      return this.tickets.value.find(t => t.name === name);
   }
}
