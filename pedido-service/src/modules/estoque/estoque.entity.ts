import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Estoque {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  produtoId: number;

  @Column()
  quantidade: number;
}
