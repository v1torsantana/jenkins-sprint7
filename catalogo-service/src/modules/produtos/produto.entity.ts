import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  uva: string;

  @Column()
  tipo: string;

  @Column()
  preco: number;

  @Column()
  estoque: number;
}
