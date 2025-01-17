import { Component, Input } from '@angular/core';
import { TicketUser } from '@confs/event/data-state';

@Component({
  selector: 'confs-event-ticket',
  templateUrl: './event-ticket.component.html',
})
export class EventTicketComponent {
  @Input() user?: TicketUser;
}
