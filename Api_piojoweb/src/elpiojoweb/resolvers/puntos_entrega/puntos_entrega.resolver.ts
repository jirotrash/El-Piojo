import { Resolver } from '@nestjs/graphql';
import { PuntosEntregaService } from '../../services/puntos_entrega/puntos_entrega.service';

@Resolver()
export class PuntosEntregaResolver {
	constructor(private readonly puntosEntregaService: PuntosEntregaService) {}

	// TODO: Añadir Queries y Mutations CRUD
}
