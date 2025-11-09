import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProdutoService } from './produto.service';

@Controller('produtos')
export class ProdutoController {
  constructor(private service: ProdutoService) {}

  @Get()
  listar() {
    return this.service.listar();
  }

  @Post()
  criar(@Body() body) {
    return this.service.criar(body);
  }
}
