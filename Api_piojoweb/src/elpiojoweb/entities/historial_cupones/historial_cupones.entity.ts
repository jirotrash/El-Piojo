import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'historial_cupones' })
export class HistorialCupones {
  @PrimaryGeneratedColumn({ name: 'id_historial_cupones' })
  id_historial_cupones: number;

  @Column('decimal', { precision: 10, scale: 2 })
  monto: number;

  @Column({ type: 'date' })
  fecha_expiracion: string;
}
