import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Pedido } from './modules/pedidos/pedido.entity';
import { PedidoController } from './modules/pedidos/pedido.controller';
import { PedidoService } from './modules/pedidos/pedido.service';

import { Estoque } from './modules/estoque/estoque.entity';
import { EstoqueController } from './modules/estoque/estoque.controller';
import { EstoqueService } from './modules/estoque/estoque.service';

import { Compra } from './modules/compras/compra.entity';
import { CompraController } from './modules/compras/compra.controller';
import { CompraService } from './modules/compras/compra.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Pedido, Estoque, Compra],
      synchronize: true,
    }),

    TypeOrmModule.forFeature([Pedido, Estoque, Compra])
  ],

  controllers: [
    PedidoController,
    EstoqueController,
    CompraController
  ],

  providers: [
    PedidoService,
    EstoqueService,
    CompraService
  ],
})
export class AppModule {}
