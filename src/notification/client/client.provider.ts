import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export const NotificationClient = ClientProxyFactory.create({
  transport: Transport.TCP,
  options: {
    host: '10.10.6.228',
    port: 3014,
  },
});
