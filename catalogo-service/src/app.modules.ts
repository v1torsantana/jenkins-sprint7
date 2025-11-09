import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from './modules/produtos/produto.entity';
import { ProdutoController } from './modules/produtos/produto.controller';
import { ProdutoService } from './modules/produtos/produto.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',              // simples pra testar sem docker
      database: 'catalogo.db',     // arquivo criado automaticamente
      entities: [Produto],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Produto])
  ],
  controllers: [ProdutoController],
  providers: [ProdutoService],
})
export class AppModule {}
