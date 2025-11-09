import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './pedido.entity';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private readonly repo: Repository<Pedido>,
  ) {}

  listar(): Promise<Pedido[]> {
    return this.repo.find();
  }

  criar(data: Partial<Pedido>): Promise<Pedido> {
    const pedido = this.repo.create(data); // cria uma instância do tipo Pedido
    return this.repo.save(pedido);         // retorna Promise<Pedido>
  }
}
