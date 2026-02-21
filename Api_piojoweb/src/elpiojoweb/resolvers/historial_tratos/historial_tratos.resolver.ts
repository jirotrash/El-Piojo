import { Resolver } from '@nestjs/graphql';
import { HistorialTratosService } from '../../services/historial_tratos/historial_tratos.service';

@Resolver()
export class HistorialTratosResolver {
	constructor(private readonly historialTratosService: HistorialTratosService) {}

	// TODO: Añadir Queries y Mutations CRUD
}
