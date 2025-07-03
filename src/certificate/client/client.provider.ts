import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export const CertificateClient = ClientProxyFactory.create({
  transport: Transport.TCP,
  options: {
    host: '10.10.2.57',
    port: 3010,
  },
});
