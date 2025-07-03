import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export const CourseClient = ClientProxyFactory.create({
  transport: Transport.TCP,
  options: {
    host: '192.168.20.161',
    port: 3011,
  },
});
