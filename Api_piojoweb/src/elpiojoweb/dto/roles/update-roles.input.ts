import { InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateRolesInput } from './create-roles.input';

@InputType()
export class UpdateRolesInput extends PartialType(CreateRolesInput) {}

