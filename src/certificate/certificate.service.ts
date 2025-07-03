import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { CertificateClient } from './client/client.provider';

@Injectable()
export class CertificatesService implements OnModuleDestroy {
  private client = CertificateClient;

  async generateCertificate(data: any) {
    return firstValueFrom(this.client.send({ cmd: 'generate_certificate' }, data));
  }

  async getAllCertificates() {
    return firstValueFrom(this.client.send({ cmd: 'get_all_certificates' }, {}));
  } 

  async getCertificate(id: string) {
    return firstValueFrom(this.client.send({ cmd: 'get_certificate' }, { id }));
  }

  async downloadCertificate(id: string) {
    return firstValueFrom(this.client.send({ cmd: 'download_certificate' }, { id }));
  }

  async getCertificatesByStudent(studentId: string) {
    return firstValueFrom(this.client.send({ cmd: 'get_certificates_by_student' },
      { studentId }
    ));
  }

  async onModuleDestroy() {
    this.client.close();
  }
}
