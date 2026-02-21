import { Resolver } from '@nestjs/graphql';
import { PublicacionesService } from '../../services/publicaciones/publicaciones.service';

@Resolver()
export class PublicacionesResolver {
	constructor(private readonly publicacionesService: PublicacionesService) {}

	// TODO: Añadir Queries y Mutations CRUD
}
