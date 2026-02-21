import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Municipios } from '../../entities/municipios/municipios.entity';
import { CreateMunicipiosInput } from '../../dto/municipios/create-municipios.input';
import { UpdateMunicipiosInput } from '../../dto/municipios/update-municipios.input';

@Injectable()
export class MunicipiosService {
	constructor(
		@InjectRepository(Municipios)
		private readonly repo: Repository<Municipios>,
	) {}

	create(createDto: CreateMunicipiosInput) {
		const ent = this.repo.create(createDto as any);
		return this.repo.save(ent);
	}

	findAll() {
		return this.repo.find();
	}

	findOne(id: number) {
		return this.repo.findOne({ where: { id_municipios: id } });
	}

	async update(id: number, updateDto: UpdateMunicipiosInput) {
		await this.repo.update({ id_municipios: id } as any, updateDto as any);
		return this.findOne(id);
	}

	remove(id: number) {
		return this.repo.delete({ id_municipios: id } as any);
	}
}
