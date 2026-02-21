import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Carreras } from '../../entities/carreras/carreras.entity';
import { CreateCarreraInput } from '../../dto/carrera/create-carrera.input';
import { UpdateCarreraInput } from '../../dto/carrera/update-carrera.inputs';

@Injectable()
export class CarrerasService {
	constructor(
		@InjectRepository(Carreras)
		private readonly repo: Repository<Carreras>,
	) {}

	create(createDto: CreateCarreraInput) {
		const ent = this.repo.create(createDto as any);
		return this.repo.save(ent);
	}

	findAll() {
		return this.repo.find();
	}

	findOne(id: number) {
		return this.repo.findOne({ where: { id_carreras: id } });
	}

	async update(id: number, updateDto: UpdateCarreraInput) {
		await this.repo.update({ id_carreras: id } as any, updateDto as any);
		return this.findOne(id);
	}

	remove(id: number) {
		return this.repo.delete({ id_carreras: id } as any);
	}
}
