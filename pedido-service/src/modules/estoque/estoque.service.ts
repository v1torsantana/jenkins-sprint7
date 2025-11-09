import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Estoque } from './estoque.entity';

@Injectable()
export class EstoqueService {
  constructor(
    @InjectRepository(Estoque)
    private repo: Repository<Estoque>
  ) {}

  listar() {
    return this.repo.find();
  }

  ajustar(produtoId: number, quantidade: number) {
    return this.repo.save({ produtoId, quantidade });
  }
}
