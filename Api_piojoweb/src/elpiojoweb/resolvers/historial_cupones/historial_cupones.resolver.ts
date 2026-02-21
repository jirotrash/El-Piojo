import { Resolver } from '@nestjs/graphql';
import { HistorialCuponesService } from '../../services/historial_cupones/historial_cupones.service';

@Resolver()
export class HistorialCuponesResolver {
	constructor(private readonly historialCuponesService: HistorialCuponesService) {}

	// TODO: Añadir Queries y Mutations CRUD
}
