import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export const UsersClient = ClientProxyFactory.create({
  transport: Transport.TCP,
  options: {
    host: '192.168.0.105',
    port: 3010,
  },
});
