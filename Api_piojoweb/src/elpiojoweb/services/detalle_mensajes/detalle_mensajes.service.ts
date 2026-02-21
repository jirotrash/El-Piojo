import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetalleMensajes } from '../../entities/detalle_mensajes/detalle_mensajes.entity';
import { CreateDetalleMensajesInput } from '../../dto/detalle_mensajes/create-detalle_mensajes.input';
import { UpdateDetalleMensajesInput } from '../../dto/detalle_mensajes/update-detalle_mensajes.input';

@Injectable()
export class DetalleMensajesService {
	constructor(
		@InjectRepository(DetalleMensajes)
		private readonly repo: Repository<DetalleMensajes>,
	) {}

	create(createDto: CreateDetalleMensajesInput) {
		const ent = this.repo.create(createDto as any);
		return this.repo.save(ent);
	}

	findAll() {
		return this.repo.find();
	}

	findOne(id: number) {
		return this.repo.findOne({ where: { id_detalle_mensajes: id } });
	}

	async update(id: number, updateDto: UpdateDetalleMensajesInput) {
		await this.repo.update({ id_detalle_mensajes: id } as any, updateDto as any);
		return this.findOne(id);
	}

	remove(id: number) {
		return this.repo.delete({ id_detalle_mensajes: id } as any);
	}
}
