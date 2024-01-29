/**
 * Container for ticket data
 * @interface Ticket
 * @param {number} id - Unique ID of the ticket
 * @param {string} name - Name of the ticket
 * @param {number} price - Price of the ticket
 */
export interface Ticket {
   id: number;
   name: string;
   price: number;
}