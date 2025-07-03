import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export const AuthClient = ClientProxyFactory.create({
  transport: Transport.TCP,
  options: {
    host: '10.10.5.178',
    port: 3010,
  },
});
