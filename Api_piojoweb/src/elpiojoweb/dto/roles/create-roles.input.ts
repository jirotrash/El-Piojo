import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateRolesInput {
	@Field()
	@IsNotEmpty()
	@IsString()
	nombre: string;
}

