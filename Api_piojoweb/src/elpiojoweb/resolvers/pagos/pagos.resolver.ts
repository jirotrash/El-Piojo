import { Resolver } from '@nestjs/graphql';
import { PagosService } from '../../services/pagos/pagos.service';

@Resolver()
export class PagosResolver {
	constructor(private readonly pagosService: PagosService) {}

	// TODO: Añadir Queries y Mutations CRUD
}
