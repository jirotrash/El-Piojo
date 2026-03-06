import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { MunicipiosService } from '../../services/municipios/municipios.service';
import { MunicipiosType } from '../../dto/municipios/municipios.type';

@Resolver(() => MunicipiosType)
export class MunicipiosResolver {
	constructor(private readonly municipiosService: MunicipiosService) {}

	@Query(() => [MunicipiosType], { name: 'municipios' })
	findAll() {
		return this.municipiosService.findAll();
	}

	@Query(() => MunicipiosType, { name: 'municipio' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.municipiosService.findOne(id);
	}
}
