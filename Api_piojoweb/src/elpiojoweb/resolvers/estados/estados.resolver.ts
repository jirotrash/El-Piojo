import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { EstadosService } from '../../services/estados/estados.service';
import { EstadosType } from '../../dto/estados/estados.type';

@Resolver(() => EstadosType)
export class EstadosResolver {
	constructor(private readonly estadosService: EstadosService) {}

	@Query(() => [EstadosType], { name: 'estados' })
	findAll() {
		return this.estadosService.findAll();
	}

	@Query(() => EstadosType, { name: 'estado' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.estadosService.findOne(id);
	}
}
