import { InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateConversacionesInput } from './create-conversaciones.input';

@InputType()
export class UpdateConversacionesInput extends PartialType(CreateConversacionesInput) {}

