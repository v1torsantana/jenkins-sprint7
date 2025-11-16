import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pedido } from './pedido.entity';
import axios from 'axios';
import { gerarTokenServico } from '../../token';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(Pedido)
    private readonly repo: Repository<Pedido>,
  ) {}

  listar(): Promise<Pedido[]> {
    return this.repo.find();
  }

  async criar(data: Partial<Pedido>): Promise<Pedido> {
    const pedido = this.repo.create(data);
    const saved = await this.repo.save(pedido);
    const token = gerarTokenServico();

    try {
      console.log(
        `🔁 Ajustando estoque do produto ${saved.produtoId} em -${saved.quantidade}`,
      );

      await axios.post('http://catalogo.vinheria.local:3002/estoque/ajustar', {
        produtoId: saved.produtoId,
        quantidade: -saved.quantidade,
      },{ headers: { Authorization: `Bearer ${token}` } });

      console.log('✅ Estoque ajustado com sucesso');
    } catch (err) {
      console.error('❌ Erro ao ajustar estoque no catálogo:', err.message);
    }

    return saved;
  }
}
