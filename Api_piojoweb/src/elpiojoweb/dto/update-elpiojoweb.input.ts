import { InputType, PartialType, Field, Int } from '@nestjs/graphql';
import { IsInt } from 'class-validator';
import { CreateElpiojowebInput } from './create-elpiojoweb.input';

@InputType()
export class UpdateElpiojowebInput extends PartialType(CreateElpiojowebInput) {
	@Field(() => Int)
	@IsInt()
	id: number;
}
