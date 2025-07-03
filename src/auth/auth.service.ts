import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { AuthClient } from './client/client.provider';

@Injectable()
export class AuthService implements OnModuleDestroy {
  private client = AuthClient;

  async login(data: any) {
    return firstValueFrom(this.client.send({ cmd: 'login' }, data));
  }

  async register(data: { email: string; password: string }) {
    return firstValueFrom(this.client.send({ cmd: 'register' }, data));
  }

  async onModuleDestroy() {
    this.client.close();
  }
}
