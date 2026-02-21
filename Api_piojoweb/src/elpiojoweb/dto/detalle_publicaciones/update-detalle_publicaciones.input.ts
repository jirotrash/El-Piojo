import { InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateDetallePublicacionesInput } from './create-detalle_publicaciones.input';

@InputType()
export class UpdateDetallePublicacionesInput extends PartialType(CreateDetallePublicacionesInput) {}

