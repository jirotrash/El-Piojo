import { InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreatePuntosEntregaInput } from './create-puntos_entrega.input';

@InputType()
export class UpdatePuntosEntregaInput extends PartialType(CreatePuntosEntregaInput) {}

