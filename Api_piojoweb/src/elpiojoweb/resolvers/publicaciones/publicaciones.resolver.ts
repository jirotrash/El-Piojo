import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { PublicacionesService } from '../../services/publicaciones/publicaciones.service';
import { PublicacionesType } from '../../dto/publicaciones/publicaciones.type';

@Resolver(() => PublicacionesType)
export class PublicacionesResolver {
  constructor(private readonly publicacionesService: PublicacionesService) {}

  @Query(() => [PublicacionesType], { name: 'publicaciones' })
  findAll() {
    return this.publicacionesService.findAll();
  }

  @Query(() => PublicacionesType, { name: 'publicacion' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.publicacionesService.findOne(id);
  }
}

