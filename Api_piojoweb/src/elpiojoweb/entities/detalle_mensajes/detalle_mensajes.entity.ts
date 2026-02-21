import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Conversaciones } from '../conversaciones/conversaciones.entity';
import { Usuarios } from '../usuarios/usuarios.entity';

@Entity({ name: 'detalle_mensajes' })
export class DetalleMensajes {
  @PrimaryGeneratedColumn({ name: 'id_detalle_mensajes' })
  id_detalle_mensajes: number;

  @ManyToOne(() => Conversaciones, (c) => c.mensajes)
  @JoinColumn({ name: 'id_conversaciones' })
  conversacion: Conversaciones;

  @ManyToOne(() => Usuarios)
  @JoinColumn({ name: 'id_emisor' })
  emisor: Usuarios;

  @Column({ type: 'text' })
  mensaje: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_envio: Date;
}
