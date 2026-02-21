import { Resolver } from '@nestjs/graphql';
import { RolesService } from '../../services/roles/roles.service';

@Resolver()
export class RolesResolver {
	constructor(private readonly rolesService: RolesService) {}

	// TODO: Añadir Queries y Mutations CRUD
}
