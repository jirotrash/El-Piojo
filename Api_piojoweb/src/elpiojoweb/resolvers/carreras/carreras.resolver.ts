import { Resolver } from '@nestjs/graphql';
import { CarrerasService } from '../../services/carreras/carreras.service';

@Resolver()
export class CarrerasResolver {
	constructor(private readonly carrerasService: CarrerasService) {}

	// TODO: Añadir Queries y Mutations CRUD
}
