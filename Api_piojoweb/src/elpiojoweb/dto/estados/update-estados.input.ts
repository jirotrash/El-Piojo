import { InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateEstadosInput } from './create-estados.input';

@InputType()
export class UpdateEstadosInput extends PartialType(CreateEstadosInput) {}

