import { Controller, Get, Post, Body } from '@nestjs/common';
import { CompraService } from './compra.service';
import { Compra } from './compra.entity';

@Controller('compras')
export class CompraController {
  constructor(private readonly service: CompraService) {}

  @Get()
  listar(): Promise<Compra[]> {
    return this.service.listar();
  }

  @Post()
  criar(@Body() body: Partial<Compra>): Promise<Compra> {
    return this.service.criar(body);
}

}
