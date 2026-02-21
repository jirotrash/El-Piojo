import { Resolver } from '@nestjs/graphql';
import { MunicipiosService } from '../../services/municipios/municipios.service';

@Resolver()
export class MunicipiosResolver {
	constructor(private readonly municipiosService: MunicipiosService) {}

	// TODO: Añadir Queries y Mutations CRUD
}
