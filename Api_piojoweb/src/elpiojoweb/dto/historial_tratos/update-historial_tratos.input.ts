import { InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateHistorialTratosInput } from './create-historial_tratos.input';

@InputType()
export class UpdateHistorialTratosInput extends PartialType(CreateHistorialTratosInput) {}

