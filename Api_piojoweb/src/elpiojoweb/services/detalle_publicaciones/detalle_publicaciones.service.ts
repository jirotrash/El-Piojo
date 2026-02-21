import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetallePublicaciones } from '../../entities/detalle_publicaciones/detalle_publicaciones.entity';
import { CreateDetallePublicacionesInput } from '../../dto/detalle_publicaciones/create-detalle_publicaciones.input';
import { UpdateDetallePublicacionesInput } from '../../dto/detalle_publicaciones/update-detalle_publicaciones.input';

@Injectable()
export class DetallePublicacionesService {
	constructor(
		@InjectRepository(DetallePublicaciones)
		private readonly repo: Repository<DetallePublicaciones>,
	) {}

	create(createDto: CreateDetallePublicacionesInput) {
		const ent = this.repo.create(createDto as any);
		return this.repo.save(ent);
	}

	findAll() {
		return this.repo.find();
	}

	findOne(id: number) {
		return this.repo.findOne({ where: { id_detalle_publicaciones: id } });
	}

	async update(id: number, updateDto: UpdateDetallePublicacionesInput) {
		await this.repo.update({ id_detalle_publicaciones: id } as any, updateDto as any);
		return this.findOne(id);
	}

	remove(id: number) {
		return this.repo.delete({ id_detalle_publicaciones: id } as any);
	}
}
