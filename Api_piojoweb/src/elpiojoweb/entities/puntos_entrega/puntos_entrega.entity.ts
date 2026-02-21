import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Municipios } from '../municipios/municipios.entity';
import { Publicaciones } from '../publicaciones/publicaciones.entity';

@Entity({ name: 'puntos_entrega' })
export class PuntosEntrega {
  @PrimaryGeneratedColumn({ name: 'id_puntos_entrega' })
  id_puntos_entrega: number;

  @ManyToOne(() => Municipios, (m) => m.puntos_entrega)
  @JoinColumn({ name: 'id_municipios' })
  municipio: Municipios;

  @Column({ length: 100 })
  nombre: string;

  @Column('decimal', { precision: 10, scale: 8 })
  latitud: number;

  @Column('decimal', { precision: 11, scale: 8 })
  longitud: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  descripcion?: string;

  @OneToMany(() => Publicaciones, (p) => p.punto_entrega)
  publicaciones: Publicaciones[];
}
