import { Resolver } from '@nestjs/graphql';
import { DetalleVentaService } from '../../services/detalle_venta/detalle_venta.service';

@Resolver()
export class DetalleVentaResolver {
	constructor(private readonly detalleVentaService: DetalleVentaService) {}

	// TODO: Añadir Queries y Mutations CRUD
}
