import { Resolver } from '@nestjs/graphql';
import { EstadosService } from '../../services/estados/estados.service';

@Resolver()
export class EstadosResolver {
	constructor(private readonly estadosService: EstadosService) {}

	// TODO: Añadir Queries y Mutations CRUD
}
