import { Controller, Post, Body } from '@nestjs/common';
import { ProdutoService } from './produto.service';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly service: ProdutoService) {}

  @Post('ajustar')
  ajustar(@Body() body: { produtoId: number; quantidade: number }) {
    return this.service.ajustarEstoque(body.produtoId, body.quantidade);
  }
}
