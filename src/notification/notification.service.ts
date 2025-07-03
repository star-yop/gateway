import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { NotificationClient } from './client/client.provider';

@Injectable()
export class NotificationService {

    async create(data: any) {
        return firstValueFrom(NotificationClient.send({ cmd: 'send_notification' }, data));
      }
  
}
