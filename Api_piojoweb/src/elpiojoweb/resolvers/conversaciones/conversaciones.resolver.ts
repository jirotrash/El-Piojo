import { Resolver } from '@nestjs/graphql';
import { ConversacionesService } from '../../services/conversaciones/conversaciones.service';

@Resolver()
export class ConversacionesResolver {
	constructor(private readonly conversacionesService: ConversacionesService) {}

	// TODO: Añadir Queries y Mutations CRUD
}
