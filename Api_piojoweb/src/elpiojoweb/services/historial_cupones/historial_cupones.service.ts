import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistorialCupones } from '../../entities/historial_cupones/historial_cupones.entity';
import { CreateHistorialCuponesInput } from '../../dto/historial_cupones/create-historial_cupones.input';
import { UpdateHistorialCuponesInput } from '../../dto/historial_cupones/update-historial_cupones.input';

@Injectable()
export class HistorialCuponesService {
	constructor(
		@InjectRepository(HistorialCupones)
		private readonly repo: Repository<HistorialCupones>,
	) {}

	create(createDto: CreateHistorialCuponesInput) {
		const ent = this.repo.create(createDto as any);
		return this.repo.save(ent);
	}

	findAll() {
		return this.repo.find();
	}

	findOne(id: number) {
		return this.repo.findOne({ where: { id_historial_cupones: id } });
	}

	async update(id: number, updateDto: UpdateHistorialCuponesInput) {
		await this.repo.update({ id_historial_cupones: id } as any, updateDto as any);
		return this.findOne(id);
	}

	remove(id: number) {
		return this.repo.delete({ id_historial_cupones: id } as any);
	}
}
