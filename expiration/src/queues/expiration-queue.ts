import Queue from 'bull';
import { ExpirationCompletePublisher } from '../events/publishers/expiration-complete-publisher';
import { natsWrapper } from '../nats-wrapper';

// Expiration service listens the event order:created
// Expiration Queue <-> Redis Server(Contain a list of jobs with type 'order:expiration')
// - enqueue a job to Redis Server
// - precess a job from Redis Server
// Expiration service publishes the event expiration:complete

interface Payload {
  orderId: string;
}

const expirationQueue = new Queue<Payload>('order:expiration', {
  redis: {
    host: process.env.REDIS_HOST,
  },
});

expirationQueue.process(async (job) => {
  new ExpirationCompletePublisher(natsWrapper.client).publish({
    orderId: job.data.orderId,
  });
});

export { expirationQueue };
