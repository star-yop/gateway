import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CertificatesModule } from './certificate/certificate.module';
import { CourseModule } from './course/course.module';
import { UsersModule } from './users/users.module';
import { NotificationModule } from './notification/notification.module';
import { EvaluationModule } from './evaluation/evaluation.module';

@Module({
  imports: [AuthModule, UsersModule, CertificatesModule, CourseModule, EvaluationModule, NotificationModule],
})
export class AppModule {}
