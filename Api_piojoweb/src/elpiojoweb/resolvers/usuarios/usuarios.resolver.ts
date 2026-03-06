import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { UsuariosService } from '../../services/usuarios/usuarios.service';
import { UsuariosType } from '../../dto/usuarios/usuarios.type';

@Resolver(() => UsuariosType)
export class UsuariosResolver {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Query(() => [UsuariosType], { name: 'usuarios' })
  findAll() {
    return this.usuariosService.findAll();
  }

  @Query(() => UsuariosType, { name: 'usuario' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usuariosService.findOne(id);
  }
}

