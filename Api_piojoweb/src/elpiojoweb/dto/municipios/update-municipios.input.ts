import { InputType } from '@nestjs/graphql';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMunicipiosInput } from './create-municipios.input';

@InputType()
export class UpdateMunicipiosInput extends PartialType(CreateMunicipiosInput) {}

