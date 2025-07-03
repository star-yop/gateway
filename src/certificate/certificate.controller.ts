import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CertificatesService } from './certificate.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('certificates')
@Controller('certificates')
export class CertificatesController {
  constructor(private readonly certificatesService: CertificatesService) {}

  @Post()
  async create(@Body() data: any) {
    return this.certificatesService.generateCertificate(data);
  }

  @Get()
  async findAll() {
    return this.certificatesService.getAllCertificates();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.certificatesService.getCertificate(id);
  }

  @Get(':id/download')
  async download(@Param('id') id: string) {
    return this.certificatesService.downloadCertificate(id);
  }

  @Get('student/:studentId')
  async findByStudent(@Param('studentId') studentId: string) {
    return this.certificatesService.getCertificatesByStudent(studentId);
  }
}
