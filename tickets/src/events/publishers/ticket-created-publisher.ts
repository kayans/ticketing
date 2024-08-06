import { Publisher, Subjects, TicketCreatedEvent } from '@ksticket/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}