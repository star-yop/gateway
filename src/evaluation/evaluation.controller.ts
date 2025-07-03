import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EvaluationService } from './evaluation.service';

@ApiTags('evaluations')
@Controller('evaluations')
export class EvaluationController {
  constructor(private readonly EvaluationService: EvaluationService) {}

  @Post()
  async create(@Body() data: any) {
    return this.EvaluationService.createEvaluation(data);
  }

  @Get()
  async findAll() {
    return this.EvaluationService.findAllEvaluations();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.EvaluationService.findEvaluationById(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.EvaluationService.deleteEvaluation(id);
  }
}
