import { Resolver } from '@nestjs/graphql';
import { UsuariosService } from '../../services/usuarios/usuarios.service';

@Resolver()
export class UsuariosResolver {
	constructor(private readonly usuariosService: UsuariosService) {}

	// TODO: Añadir Queries y Mutations CRUD
}
