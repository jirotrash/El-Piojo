import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { HistorialTratosService } from '../../services/historial_tratos/historial_tratos.service';
import { HistorialTratosType } from '../../dto/historial_tratos/historial_tratos.type';

@Resolver(() => HistorialTratosType)
export class HistorialTratosResolver {
  constructor(private readonly historialTratosService: HistorialTratosService) {}

  @Query(() => [HistorialTratosType], { name: 'historialTratos' })
  findAll() {
    return this.historialTratosService.findAll();
  }

  @Query(() => HistorialTratosType, { name: 'historialTrato' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.historialTratosService.findOne(id);
  }
}

