import { Controller, Get, Post, Body } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido.entity';

@Controller('pedidos')
export class PedidoController {
  constructor(private readonly service: PedidoService) {}

  @Get()
  listar(): Promise<Pedido[]> {
    return this.service.listar();
  }

  @Post()
  criar(@Body() body: Partial<Pedido>): Promise<Pedido> {
    return this.service.criar(body);
  }
}
