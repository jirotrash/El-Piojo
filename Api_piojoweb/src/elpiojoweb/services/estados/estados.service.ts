import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estados } from '../../entities/estados/estados.entity';
import { CreateEstadosInput } from '../../dto/estados/create-estados.input';
import { UpdateEstadosInput } from '../../dto/estados/update-estados.input';

@Injectable()
export class EstadosService {
	constructor(
		@InjectRepository(Estados)
		private readonly repo: Repository<Estados>,
	) {}

	create(createDto: CreateEstadosInput) {
		const ent = this.repo.create(createDto as any);
		return this.repo.save(ent);
	}

	findAll() {
		return this.repo.find();
	}

	findOne(id: number) {
		return this.repo.findOne({ where: { id_estados: id } });
	}

	async update(id: number, updateDto: UpdateEstadosInput) {
		await this.repo.update({ id_estados: id } as any, updateDto as any);
		return this.findOne(id);
	}

	remove(id: number) {
		return this.repo.delete({ id_estados: id } as any);
	}
}
