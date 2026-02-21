import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DetalleVenta } from '../../entities/detalle_venta/detalle_venta.entity';
import { CreateDetalleVentaInput } from '../../dto/detalle_venta/create-detalle_venta.input';
import { UpdateDetalleVentaInput } from '../../dto/detalle_venta/update-detalle_venta.input';

@Injectable()
export class DetalleVentaService {
	constructor(
		@InjectRepository(DetalleVenta)
		private readonly repo: Repository<DetalleVenta>,
	) {}

	create(createDto: CreateDetalleVentaInput) {
		const ent = this.repo.create(createDto as any);
		return this.repo.save(ent);
	}

	findAll() {
		return this.repo.find();
	}

	findOne(id: number) {
		return this.repo.findOne({ where: { id_detalle_venta: id } });
	}

	async update(id: number, updateDto: UpdateDetalleVentaInput) {
		await this.repo.update({ id_detalle_venta: id } as any, updateDto as any);
		return this.findOne(id);
	}

	remove(id: number) {
		return this.repo.delete({ id_detalle_venta: id } as any);
	}
}
