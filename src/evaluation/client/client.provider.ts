import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export const EvaluationClient = ClientProxyFactory.create({
  transport: Transport.TCP,
  options: {
    host: '192.168.20.163',
    port: 3012,
  },
});
