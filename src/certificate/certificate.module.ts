import { Module } from '@nestjs/common';
import { CertificatesController } from './certificate.controller';
import { CertificatesService } from './certificate.service';

@Module({
  controllers: [CertificatesController],
  providers: [CertificatesService],
})
export class CertificatesModule {}
