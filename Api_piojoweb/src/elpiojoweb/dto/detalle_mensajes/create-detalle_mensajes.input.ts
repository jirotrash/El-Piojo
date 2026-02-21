import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateDetalleMensajesInput {
	@Field(() => Int)
	@IsInt()
	id_conversaciones: number;

	@Field(() => Int)
	@IsInt()
	id_emisor: number;

	@Field()
	@IsNotEmpty()
	@IsString()
	mensaje: string;
}

