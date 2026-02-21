import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Usuarios } from '../usuarios/usuarios.entity';

@Entity({ name: 'carreras' })
export class Carreras {
  @PrimaryGeneratedColumn({ name: 'id_carreras' })
  id_carreras: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 150 })
  universidad: string;

  @OneToMany(() => Usuarios, (u) => u.carrera)
  usuarios: Usuarios[];
}
