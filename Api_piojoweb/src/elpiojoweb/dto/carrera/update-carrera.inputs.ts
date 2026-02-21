import { InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCarreraInput } from './create-carrera.input';

@InputType()
export class UpdateCarreraInput extends PartialType(CreateCarreraInput) {}
