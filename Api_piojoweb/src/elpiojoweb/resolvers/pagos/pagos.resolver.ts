import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { PagosService } from '../../services/pagos/pagos.service';
import { PagosType } from '../../dto/pagos/pagos.type';

@Resolver(() => PagosType)
export class PagosResolver {
  constructor(private readonly pagosService: PagosService) {}

  @Query(() => [PagosType], { name: 'pagos' })
  findAll() {
    return this.pagosService.findAll();
  }

  @Query(() => PagosType, { name: 'pago' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.pagosService.findOne(id);
  }
}

