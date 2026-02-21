import { Resolver } from '@nestjs/graphql';
import { DetallePublicacionesService } from '../../services/detalle_publicaciones/detalle_publicaciones.service';

@Resolver()
export class DetallePublicacionesResolver {
	constructor(private readonly detallePublicacionesService: DetallePublicacionesService) {}

	// TODO: Añadir Queries y Mutations CRUD
}
