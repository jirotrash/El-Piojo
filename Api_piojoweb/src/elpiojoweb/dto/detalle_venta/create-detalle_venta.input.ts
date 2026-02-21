import { InputType, Field, Int, Float } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

@InputType()
export class CreateDetalleVentaInput {
	@Field(() => Int)
	@IsInt()
	id_pagos: number;

	@Field(() => Int)
	@IsInt()
	id_publicaciones: number;

	@Field(() => Int, { nullable: true })
	@IsOptional()
	@IsInt()
	cantidad?: number;

	@Field(() => Float)
	@IsNumber()
	subtotal: number;
}

