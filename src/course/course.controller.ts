import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { CoursesService } from './course.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('courses')
@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  async findAll() {
    return this.coursesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.coursesService.findOne(id);
  }

  @Post()
  async create(@Body() data: any) {
    return this.coursesService.create(data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.coursesService.delete(id);
  }
  
  @Get(':id/enrollments')
  async getEnrollments(@Param('id') id: string) {
    return this.coursesService.getEnrollments(id);
  }

  @Get(':id/enrollment-count')
  async getEnrollmentCount(@Param('id') id: string) {
    return this.coursesService.getEnrollmentCount(id);
  }
}
