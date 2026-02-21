import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Municipios } from '../municipios/municipios.entity';

@Entity({ name: 'estados' })
export class Estados {
  @PrimaryGeneratedColumn({ name: 'id_estados' })
  id_estados: number;

  @Column({ length: 100 })
  nombre: string;

  @OneToMany(() => Municipios, (m) => m.estado)
  municipios: Municipios[];
}
