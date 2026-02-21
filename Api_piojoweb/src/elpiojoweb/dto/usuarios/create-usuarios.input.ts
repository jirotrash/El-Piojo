import { InputType, Field, Int } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString, IsInt } from 'class-validator';

@InputType()
export class CreateUsuariosInput {
	@Field(() => Int, { nullable: true })
	@IsOptional()
	@IsInt()
	id_roles?: number;

	@Field(() => Int, { nullable: true })
	@IsOptional()
	@IsInt()
	id_carreras?: number;

	@Field(() => Int)
	@IsInt()
	id_municipios: number;

	@Field()
	@IsNotEmpty()
	@IsString()
	nombre: string;

	@Field()
	@IsNotEmpty()
	@IsString()
	apellido_paterno: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	apellido_materno?: string;

	@Field()
	@IsEmail()
	email: string;

	@Field()
	@IsNotEmpty()
	@IsString()
	password: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	telefono?: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	matricula?: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	foto_perfil?: string;

	@Field({ nullable: true })
	@IsOptional()
	@IsString()
	direccion?: string;
}

