import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { DetalleVentaService } from '../../services/detalle_venta/detalle_venta.service';
import { DetalleVentaType } from '../../dto/detalle_venta/detalle_venta.type';

@Resolver(() => DetalleVentaType)
export class DetalleVentaResolver {
  constructor(private readonly detalleVentaService: DetalleVentaService) {}

  @Query(() => [DetalleVentaType], { name: 'detalleVenta' })
  findAll() {
    return this.detalleVentaService.findAll();
  }

  @Query(() => DetalleVentaType, { name: 'detalleVentaById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.detalleVentaService.findOne(id);
  }
}

