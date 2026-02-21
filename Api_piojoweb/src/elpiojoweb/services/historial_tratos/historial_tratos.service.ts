import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HistorialTratos } from '../../entities/historial_tratos/historial_tratos.entity';
import { CreateHistorialTratosInput } from '../../dto/historial_tratos/create-historial_tratos.input';
import { UpdateHistorialTratosInput } from '../../dto/historial_tratos/update-historial_tratos.input';

@Injectable()
export class HistorialTratosService {
	constructor(
		@InjectRepository(HistorialTratos)
		private readonly repo: Repository<HistorialTratos>,
	) {}

	create(createDto: CreateHistorialTratosInput) {
		const ent = this.repo.create(createDto as any);
		return this.repo.save(ent);
	}

	findAll() {
		return this.repo.find();
	}

	findOne(id: number) {
		return this.repo.findOne({ where: { id_historial_tratos: id } });
	}

	async update(id: number, updateDto: UpdateHistorialTratosInput) {
		await this.repo.update({ id_historial_tratos: id } as any, updateDto as any);
		return this.findOne(id);
	}

	remove(id: number) {
		return this.repo.delete({ id_historial_tratos: id } as any);
	}
}
