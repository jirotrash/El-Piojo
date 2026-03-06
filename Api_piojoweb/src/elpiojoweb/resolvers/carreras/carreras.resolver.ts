import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { CarrerasService } from '../../services/carreras/carreras.service';
import { CarrerasType } from '../../dto/carreras/carreras.type';

@Resolver(() => CarrerasType)
export class CarrerasResolver {
  constructor(private readonly carrerasService: CarrerasService) {}

  @Query(() => [CarrerasType], { name: 'carreras' })
  findAll() {
    return this.carrerasService.findAll();
  }

  @Query(() => CarrerasType, { name: 'carrera' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.carrerasService.findOne(id);
  }
}

