import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Usuarios } from '../usuarios/usuarios.entity';
import { PuntosEntrega } from '../puntos_entrega/puntos_entrega.entity';
import { DetallePublicaciones } from '../detalle_publicaciones/detalle_publicaciones.entity';
import { Conversaciones } from '../conversaciones/conversaciones.entity';

export enum GeneroEnum {
  HOMBRE = 'HOMBRE',
  MUJER = 'MUJER',
  UNISEX = 'UNISEX',
  ACADEMICO = 'ACADEMICO',
}

export enum EstadoUsoEnum {
  NUEVO = 'NUEVO',
  BUENO = 'BUENO',
  USADO = 'USADO',
}

@Entity({ name: 'publicaciones' })
export class Publicaciones {
  @PrimaryGeneratedColumn({ name: 'id_publicaciones' })
  id_publicaciones: number;

  @ManyToOne(() => Usuarios, (u) => u.publicaciones)
  @JoinColumn({ name: 'id_usuarios' })
  usuario: Usuarios;

  @ManyToOne(() => PuntosEntrega, (p) => p.publicaciones, { nullable: true })
  @JoinColumn({ name: 'id_puntos_entrega' })
  punto_entrega?: PuntosEntrega;

  @Column({ length: 150 })
  titulo: string;

  @Column({ type: 'text', nullable: true })
  descripcion?: string;

  @Column({ length: 50 })
  categoria: string;

  @Column({ length: 50, nullable: true })
  talla?: string;

  @Column({ length: 50, nullable: true })
  marca?: string;

  @Column({ length: 30, nullable: true })
  color?: string;

  @Column({ type: 'enum', enum: GeneroEnum })
  genero: GeneroEnum;

  @Column({ type: 'enum', enum: EstadoUsoEnum })
  estado_uso: EstadoUsoEnum;

  @Column('decimal', { precision: 10, scale: 2, default: 0 })
  precio: number;

  @Column({ default: true })
  disponible: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha_publicacion: Date;

  @OneToMany(() => DetallePublicaciones, (d) => d.publicacion)
  fotos: DetallePublicaciones[];

  @OneToMany(() => Conversaciones, (c) => c.publicacion)
  conversaciones: Conversaciones[];
}
