import { InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreatePagosInput } from './create-pagos.input';

@InputType()
export class UpdatePagosInput extends PartialType(CreatePagosInput) {}

