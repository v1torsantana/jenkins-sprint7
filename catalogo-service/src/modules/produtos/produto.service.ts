import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Produto } from './produto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private repo: Repository<Produto>
  ) {}

  listar() {
    return this.repo.find();
  }

  criar(data) {
    const produto = this.repo.create(data);
    return this.repo.save(produto);
  }
}
