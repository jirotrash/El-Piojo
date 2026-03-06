import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { DetalleMensajesService } from '../../services/detalle_mensajes/detalle_mensajes.service';
import { DetalleMensajesType } from '../../dto/detalle_mensajes/detalle_mensajes.type';

@Resolver(() => DetalleMensajesType)
export class DetalleMensajesResolver {
  constructor(private readonly detalleMensajesService: DetalleMensajesService) {}

  @Query(() => [DetalleMensajesType], { name: 'detalleMensajes' })
  findAll() {
    return this.detalleMensajesService.findAll();
  }

  @Query(() => DetalleMensajesType, { name: 'detalleMensaje' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.detalleMensajesService.findOne(id);
  }
}

