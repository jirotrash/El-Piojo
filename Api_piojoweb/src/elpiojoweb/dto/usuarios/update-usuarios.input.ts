import { InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuariosInput } from './create-usuarios.input';

@InputType()
export class UpdateUsuariosInput extends PartialType(CreateUsuariosInput) {}

