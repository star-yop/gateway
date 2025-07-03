import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() data: any) {
    return this.authService.login(data);
  }

  @Post('register')
  async register(@Body() data: { email: string; password: string }) {
    return this.authService.register(data);
  }
}
