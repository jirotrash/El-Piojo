import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class EstadosType {
  @Field(() => Int)
  id_estados: number;

  @Field()
  nombre: string;
}
