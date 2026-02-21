import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

@InputType()
export class CreatePuntosEntregaInput {
	@Field(() => Int)
	@IsInt()
	id_municipios: number;

	@Field()
	@IsNotEmpty()
	@IsString()
	nombre: string;

	@Field(() => Float)
	@IsNumber()
	latitud: number;

	@Field(() => Float)
	@IsNumber()
	longitud: number;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	descripcion?: string;
}

