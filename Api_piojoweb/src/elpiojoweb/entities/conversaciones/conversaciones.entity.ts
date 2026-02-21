import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Publicaciones } from '../publicaciones/publicaciones.entity';
import { Usuarios } from '../usuarios/usuarios.entity';
import { DetalleMensajes } from '../detalle_mensajes/detalle_mensajes.entity';

@Entity({ name: 'conversaciones' })
export class Conversaciones {
  @PrimaryGeneratedColumn({ name: 'id_conversaciones' })
  id_conversaciones: number;

  @ManyToOne(() => Publicaciones, (p) => p.conversaciones)
  @JoinColumn({ name: 'id_publicaciones' })
  publicacion: Publicaciones;

  @ManyToOne(() => Usuarios, (u) => u.conversaciones_vendedor)
  @JoinColumn({ name: 'id_vendedor' })
  vendedor: Usuarios;

  @ManyToOne(() => Usuarios, (u) => u.conversaciones_comprador)
  @JoinColumn({ name: 'id_comprador' })
  comprador: Usuarios;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_creacion: Date;

  @OneToMany(() => DetalleMensajes, (d) => d.conversacion)
  mensajes: DetalleMensajes[];
}
