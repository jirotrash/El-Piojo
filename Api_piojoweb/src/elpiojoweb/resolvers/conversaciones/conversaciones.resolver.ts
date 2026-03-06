import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ConversacionesService } from '../../services/conversaciones/conversaciones.service';
import { ConversacionesType } from '../../dto/conversaciones/conversaciones.type';

@Resolver(() => ConversacionesType)
export class ConversacionesResolver {
  constructor(private readonly conversacionesService: ConversacionesService) {}

  @Query(() => [ConversacionesType], { name: 'conversaciones' })
  findAll() {
    return this.conversacionesService.findAll();
  }

  @Query(() => ConversacionesType, { name: 'conversacion' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.conversacionesService.findOne(id);
  }
}

