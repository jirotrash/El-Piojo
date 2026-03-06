import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { HistorialCuponesService } from '../../services/historial_cupones/historial_cupones.service';
import { HistorialCuponesType } from '../../dto/historial_cupones/historial_cupones.type';

@Resolver(() => HistorialCuponesType)
export class HistorialCuponesResolver {
  constructor(private readonly historialCuponesService: HistorialCuponesService) {}

  @Query(() => [HistorialCuponesType], { name: 'historialCupones' })
  findAll() {
    return this.historialCuponesService.findAll();
  }

  @Query(() => HistorialCuponesType, { name: 'historialCupon' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.historialCuponesService.findOne(id);
  }
}

