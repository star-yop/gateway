import { Injectable } from '@nestjs/common';
import { defaultIfEmpty, firstValueFrom, timeout } from 'rxjs';
import { CourseClient } from './client/client.provider';

@Injectable()
export class CoursesService {
  private client = CourseClient;

  async findAll() {
    return firstValueFrom(this.client.send({ cmd: 'find_all_courses' }, {}));
  }

  async findOne(id: string) {
    return firstValueFrom(this.client.send({ cmd: 'find_course_by_id' }, { id }));
  }

  async create(data: any) {
    return firstValueFrom(this.client.send({ cmd: 'create_course' }, data));
  }

  async delete(id: string) {
  try {
    const response = await firstValueFrom(
      this.client.send({ cmd: 'delete_course' }, { id }).pipe(
        timeout(3000), // Opcional: timeout para evitar esperas infinitas
        defaultIfEmpty({ success: false, message: 'No response from service' }) // ¡Clave!
      )
    );
    
    if (!response.success) {
      throw new Error(response.message);
    }
    return response;
    
  } catch (error) {
    throw new Error(`Delete failed: ${error.message}`);
  }
}

  async getEnrollments(courseId: string) {
    return firstValueFrom(this.client.send({ cmd: 'get_course_enrollments' }, { courseId }));
  }

  async getEnrollmentCount(courseId: string) {
    return firstValueFrom(this.client.send({ cmd: 'get_course_enrollments' }, { courseId }));
  }
}
