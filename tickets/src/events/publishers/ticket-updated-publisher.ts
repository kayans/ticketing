import { Publisher, Subjects, TicketUpdatedEvent } from '@ksticket/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
