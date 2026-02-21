import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, IsString, IsNumber } from 'class-validator';

@InputType()
export class CreateHistorialTratosInput {
	@Field(() => Int, { nullable: true })
	@IsOptional()
	@IsInt()
	id_pagos?: number;

	@Field(() => Int)
	@IsInt()
	id_vendedor: number;

	@Field(() => Int)
	@IsInt()
	id_comprador: number;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	comentario?: string;

	@Field(() => Int, { nullable: true })
	@IsOptional()
	@IsNumber()
	calificacion?: number;
}

