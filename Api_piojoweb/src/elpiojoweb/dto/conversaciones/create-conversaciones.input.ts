import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt } from 'class-validator';

@InputType()
export class CreateConversacionesInput {
	@Field(() => Int)
	@IsInt()
	id_publicaciones: number;

	@Field(() => Int)
	@IsInt()
	id_vendedor: number;

	@Field(() => Int)
	@IsInt()
	id_comprador: number;
}

