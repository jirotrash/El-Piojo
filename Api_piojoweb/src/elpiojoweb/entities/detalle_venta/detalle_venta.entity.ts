import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pagos } from '../pagos/pagos.entity';
import { Publicaciones } from '../publicaciones/publicaciones.entity';

@Entity({ name: 'detalle_venta' })
export class DetalleVenta {
  @PrimaryGeneratedColumn({ name: 'id_detalle_venta' })
  id_detalle_venta: number;

  @ManyToOne(() => Pagos, (p) => p.detalle_venta)
  @JoinColumn({ name: 'id_pagos' })
  pago: Pagos;

  @ManyToOne(() => Publicaciones)
  @JoinColumn({ name: 'id_publicaciones' })
  publicacion: Publicaciones;

  @Column({ type: 'int', default: 1 })
  cantidad: number;

  @Column('decimal', { precision: 10, scale: 2 })
  subtotal: number;
}
