import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuarios } from '../../entities/usuarios/usuarios.entity';
import { CreateUsuariosInput } from '../../dto/usuarios/create-usuarios.input';
import { UpdateUsuariosInput } from '../../dto/usuarios/update-usuarios.input';

@Injectable()
export class UsuariosService {
	constructor(
		@InjectRepository(Usuarios)
		private readonly repo: Repository<Usuarios>,
	) {}

	create(createDto: CreateUsuariosInput) {
		const ent = this.repo.create(createDto as any);
		return this.repo.save(ent);
	}

	findAll() {
		return this.repo.find();
	}

	findOne(id: number) {
		return this.repo.findOne({ where: { id_usuarios: id } });
	}

	async update(id: number, updateDto: UpdateUsuariosInput) {
		await this.repo.update({ id_usuarios: id } as any, updateDto as any);
		return this.findOne(id);
	}

	remove(id: number) {
		return this.repo.delete({ id_usuarios: id } as any);
	}
}
