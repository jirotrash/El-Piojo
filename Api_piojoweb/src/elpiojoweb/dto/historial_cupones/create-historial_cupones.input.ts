import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

@InputType()
export class CreateHistorialCuponesInput {
	@Field()
	@IsNotEmpty()
	@IsNumber()
	monto: number;

	@Field()
	@IsNotEmpty()
	@IsDateString()
	fecha_expiracion: string;
}

