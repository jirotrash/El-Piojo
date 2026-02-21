import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateMunicipiosInput {
	@Field(() => Int)
	@IsInt()
	id_estados: number;

	@Field()
	@IsNotEmpty()
	@IsString()
	nombre: string;
}

