import { Subjects, Publisher, PaymentCreatedEvent } from '@ksticket/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
