import { Resolver } from '@nestjs/graphql';
import { DetalleMensajesService } from '../../services/detalle_mensajes/detalle_mensajes.service';

@Resolver()
export class DetalleMensajesResolver {
	constructor(private readonly detalleMensajesService: DetalleMensajesService) {}

	// TODO: Añadir Queries y Mutations CRUD
}
