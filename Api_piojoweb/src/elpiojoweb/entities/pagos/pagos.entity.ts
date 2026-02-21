import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Usuarios } from '../usuarios/usuarios.entity';
import { HistorialCupones } from '../historial_cupones/historial_cupones.entity';
import { DetalleVenta } from '../detalle_venta/detalle_venta.entity';

export enum MetodoPagoEnum {
  EFECTIVO = 'EFECTIVO',
  TRANSFERENCIA = 'TRANSFERENCIA',
}

export enum EstadoPagoEnum {
  PENDIENTE = 'PENDIENTE',
  COMPLETADO = 'COMPLETADO',
  RECHAZADO = 'RECHAZADO',
}

@Entity({ name: 'pagos' })
export class Pagos {
  @PrimaryGeneratedColumn({ name: 'id_pagos' })
  id_pagos: number;

  @ManyToOne(() => Usuarios)
  @JoinColumn({ name: 'id_usuarios_pagador' })
  pagador: Usuarios;

  @ManyToOne(() => HistorialCupones, { nullable: true })
  @JoinColumn({ name: 'id_historial_cupones' })
  historial_cupon?: HistorialCupones;

  @Column('decimal', { precision: 10, scale: 2 })
  total: number;

  @Column('decimal', { precision: 10, scale: 2 })
  total_con_descuento: number;

  @Column({ type: 'enum', enum: MetodoPagoEnum })
  metodo_pago: MetodoPagoEnum;

  @Column({ type: 'enum', enum: EstadoPagoEnum, default: EstadoPagoEnum.PENDIENTE })
  estado: EstadoPagoEnum;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_pago: Date;

  @Column({ length: 255, nullable: true })
  url_comprobante?: string;

  @OneToMany(() => DetalleVenta, (d) => d.pago)
  detalle_venta: DetalleVenta[];
}
