import { InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateDetalleMensajesInput } from './create-detalle_mensajes.input';

@InputType()
export class UpdateDetalleMensajesInput extends PartialType(CreateDetalleMensajesInput) {}

