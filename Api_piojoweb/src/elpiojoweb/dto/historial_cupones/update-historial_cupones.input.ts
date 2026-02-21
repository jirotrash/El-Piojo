import { InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateHistorialCuponesInput } from './create-historial_cupones.input';

@InputType()
export class UpdateHistorialCuponesInput extends PartialType(CreateHistorialCuponesInput) {}

