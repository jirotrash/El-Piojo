import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { PuntosEntregaService } from '../../services/puntos_entrega/puntos_entrega.service';
import { PuntosEntregaType } from '../../dto/puntos_entrega/puntos_entrega.type';

@Resolver(() => PuntosEntregaType)
export class PuntosEntregaResolver {
  constructor(private readonly puntosEntregaService: PuntosEntregaService) {}

  @Query(() => [PuntosEntregaType], { name: 'puntosEntrega' })
  findAll() {
    return this.puntosEntregaService.findAll();
  }

  @Query(() => PuntosEntregaType, { name: 'puntoEntrega' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.puntosEntregaService.findOne(id);
  }
}

