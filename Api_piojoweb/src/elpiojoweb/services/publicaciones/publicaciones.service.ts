import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publicaciones } from '../../entities/publicaciones/publicaciones.entity';
import { CreatePublicacionesInput } from '../../dto/publicaciones/create-publicaciones.input';
import { UpdatePublicacionesInput } from '../../dto/publicaciones/update-publicaciones.input';

@Injectable()
export class PublicacionesService {
	constructor(
		@InjectRepository(Publicaciones)
		private readonly repo: Repository<Publicaciones>,
	) {}

	create(createDto: CreatePublicacionesInput) {
		const ent = this.repo.create(createDto as any);
		return this.repo.save(ent);
	}

	findAll() {
		return this.repo.find();
	}

	findOne(id: number) {
		return this.repo.findOne({ where: { id_publicaciones: id } });
	}

	async update(id: number, updateDto: UpdatePublicacionesInput) {
		await this.repo.update({ id_publicaciones: id } as any, updateDto as any);
		return this.findOne(id);
	}

	remove(id: number) {
		return this.repo.delete({ id_publicaciones: id } as any);
	}
}
