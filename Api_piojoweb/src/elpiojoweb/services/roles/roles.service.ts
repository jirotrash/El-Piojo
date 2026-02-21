import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Roles } from '../../entities/roles/roles.entity';
import { CreateRolesInput } from '../../dto/roles/create-roles.input';
import { UpdateRolesInput } from '../../dto/roles/update-roles.input';

@Injectable()
export class RolesService {
	constructor(
		@InjectRepository(Roles)
		private readonly repo: Repository<Roles>,
	) {}

	create(createDto: CreateRolesInput) {
		const ent = this.repo.create(createDto as any);
		return this.repo.save(ent);
	}

	findAll() {
		return this.repo.find();
	}

	findOne(id: number) {
		return this.repo.findOne({ where: { id_roles: id } });
	}

	async update(id: number, updateDto: UpdateRolesInput) {
		await this.repo.update({ id_roles: id } as any, updateDto as any);
		return this.findOne(id);
	}

	remove(id: number) {
		return this.repo.delete({ id_roles: id } as any);
	}
}
