import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PuntosEntrega } from '../../entities/puntos_entrega/puntos_entrega.entity';
import { CreatePuntosEntregaInput } from '../../dto/puntos_entrega/create-puntos_entrega.input';
import { UpdatePuntosEntregaInput } from '../../dto/puntos_entrega/update-puntos_entrega.input';

@Injectable()
export class PuntosEntregaService {
	constructor(
		@InjectRepository(PuntosEntrega)
		private readonly repo: Repository<PuntosEntrega>,
	) {}

	create(createDto: CreatePuntosEntregaInput) {
		const ent = this.repo.create(createDto as any);
		return this.repo.save(ent);
	}

	findAll() {
		return this.repo.find();
	}

	findOne(id: number) {
		return this.repo.findOne({ where: { id_puntos_entrega: id } });
	}

	async update(id: number, updateDto: UpdatePuntosEntregaInput) {
		await this.repo.update({ id_puntos_entrega: id } as any, updateDto as any);
		return this.findOne(id);
	}

	remove(id: number) {
		return this.repo.delete({ id_puntos_entrega: id } as any);
	}
}
