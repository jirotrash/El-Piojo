import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { DetallePublicacionesService } from '../../services/detalle_publicaciones/detalle_publicaciones.service';
import { DetallePublicacionesType } from '../../dto/detalle_publicaciones/detalle_publicaciones.type';

@Resolver(() => DetallePublicacionesType)
export class DetallePublicacionesResolver {
  constructor(private readonly detallePublicacionesService: DetallePublicacionesService) {}

  @Query(() => [DetallePublicacionesType], { name: 'detallePublicaciones' })
  findAll() {
    return this.detallePublicacionesService.findAll();
  }

  @Query(() => DetallePublicacionesType, { name: 'detallePublicacion' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.detallePublicacionesService.findOne(id);
  }
}

