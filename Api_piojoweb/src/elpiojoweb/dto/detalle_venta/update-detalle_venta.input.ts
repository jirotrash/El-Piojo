import { InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateDetalleVentaInput } from './create-detalle_venta.input';

@InputType()
export class UpdateDetalleVentaInput extends PartialType(CreateDetalleVentaInput) {}

