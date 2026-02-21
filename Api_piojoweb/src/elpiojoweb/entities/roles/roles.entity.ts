import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Usuarios } from '../usuarios/usuarios.entity';

@Entity({ name: 'roles' })
export class Roles {
  @PrimaryGeneratedColumn({ name: 'id_roles' })
  id_roles: number;

  @Column({ length: 50 })
  nombre: string;

  @OneToMany(() => Usuarios, (u) => u.role)
  usuarios: Usuarios[];
}
