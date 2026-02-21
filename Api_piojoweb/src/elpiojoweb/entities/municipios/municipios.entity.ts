import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Estados } from '../estados/estados.entity';
import { PuntosEntrega } from '../puntos_entrega/puntos_entrega.entity';

@Entity({ name: 'municipios' })
export class Municipios {
  @PrimaryGeneratedColumn({ name: 'id_municipios' })
  id_municipios: number;

  @ManyToOne(() => Estados, (e) => e.municipios)
  @JoinColumn({ name: 'id_estados' })
  estado: Estados;

  @Column({ length: 100 })
  nombre: string;

  @OneToMany(() => PuntosEntrega, (p) => p.municipio)
  puntos_entrega: PuntosEntrega[];
}
