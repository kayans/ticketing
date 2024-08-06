import nats from 'node-nats-streaming';
import { TicketCreatedPublisher } from './events/ticket-created-publisher';

console.clear();

// create a client to connect with nats streaming server and exchange info
const stan = nats.connect('ticketing', 'abc', {
  url: 'http://localhost:4222',
});

// listen for the connect event
// the second argument function will be executed after the client has successfully connected to the nats streaming server
stan.on('connect', async () => {
  console.log('Publisher connected to NATS');

  const publisher = new TicketCreatedPublisher(stan);
  try {
    await publisher.publish({
      id: '123',
      title: 'concert',
      price: 20,
    });
  } catch (err) {
    console.error(err);
  }

  // const data = JSON.stringify({
    // id: '123',
    // title: 'concert',
    // price: 20,
  // });

  // subject name
  // data we want to share with other services
  // callback function, which is invoked after publishing the data
  // stan.publish('ticket:created', data, () => {
  //   console.log('Event published');
  // });
});
