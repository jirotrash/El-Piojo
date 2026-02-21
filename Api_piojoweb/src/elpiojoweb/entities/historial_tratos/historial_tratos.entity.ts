import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pagos } from '../pagos/pagos.entity';
import { Usuarios } from '../usuarios/usuarios.entity';

@Entity({ name: 'historial_tratos' })
export class HistorialTratos {
  @PrimaryGeneratedColumn({ name: 'id_historial_tratos' })
  id_historial_tratos: number;

  @ManyToOne(() => Pagos, { nullable: true })
  @JoinColumn({ name: 'id_pagos' })
  pago?: Pagos;

  @ManyToOne(() => Usuarios)
  @JoinColumn({ name: 'id_vendedor' })
  vendedor: Usuarios;

  @ManyToOne(() => Usuarios)
  @JoinColumn({ name: 'id_comprador' })
  comprador: Usuarios;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_cierre: Date;

  @Column({ type: 'smallint', nullable: true })
  calificacion?: number;

  @Column({ type: 'text', nullable: true })
  comentario?: string;
}
