import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Compra {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fornecedor: string;

  @Column()
  produtoId: number;

  @Column()
  quantidade: number;

  @Column()
  data: string;
}
