import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './modules/produtos/produto.entity';
import { ProdutoController } from './modules/produtos/produto.controller';
import { ProdutoService } from './modules/produtos/produto.service';
import { EstoqueController } from './modules/produtos/estoque.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'catalogo.db',
      entities: [Produto],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Produto]),
  ],
  controllers: [ProdutoController, EstoqueController],
  providers: [ProdutoService],
})
export class AppModule {}
