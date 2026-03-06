import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class RolesType {
  @Field(() => Int)
  id_roles: number;

  @Field()
  nombre: string;
}
