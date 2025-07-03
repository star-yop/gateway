import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { EvaluationClient } from './client/client.provider';

@Injectable()
export class EvaluationService implements OnModuleDestroy {
  private client = EvaluationClient;

  async createEvaluation(data: any) {
    return firstValueFrom(this.client.send({ cmd: 'generate_evaluation' }, data));
  }

  async findAllEvaluations() {
    return firstValueFrom(this.client.send({ cmd: 'find_all_evaluations' }, {}));
  } 

  async findEvaluationById(id: string) {
    return firstValueFrom(this.client.send({ cmd: 'find_evaluation_by_id' }, { id }));
  }

  async deleteEvaluation(id: string) {
    return firstValueFrom(this.client.send({ cmd: 'delete_evaluation' }, { id }));
  } 

  async onModuleDestroy() {
    this.client.close();
  }
}
