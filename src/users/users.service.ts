import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { UsersClient } from './client/client.provider';

@Injectable()
export class UsersService {
  private client = UsersClient;

  async findAll() {
    return firstValueFrom(this.client.send({ cmd: 'find_all_users' }, {}));
  }

  async findByEmail(email: string) {
    return firstValueFrom(this.client.send({ cmd: 'find_user_by_email' }, { email }));
  }
}
