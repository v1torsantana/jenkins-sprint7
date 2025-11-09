import { Controller, Get, Post, Body } from '@nestjs/common';
import { EstoqueService } from './estoque.service';

@Controller('estoque')
export class EstoqueController {
  constructor(private service: EstoqueService) {}

  @Get()
  listar() {
    return this.service.listar();
  }

  @Post()
  ajustar(@Body() body) {
    return this.service.ajustar(body.produtoId, body.quantidade);
  }
}
