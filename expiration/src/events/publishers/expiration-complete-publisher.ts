import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@ksticket/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
