import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Compra } from './compra.entity';

@Injectable()
export class CompraService {
  constructor(
    @InjectRepository(Compra)
    private repo: Repository<Compra>
  ) {}

  listar(): Promise<Compra[]> {
    return this.repo.find();
  }

  criar(data: Partial<Compra>): Promise<Compra> {
    const compra = this.repo.create(data);
    return this.repo.save(compra);
  }
}
