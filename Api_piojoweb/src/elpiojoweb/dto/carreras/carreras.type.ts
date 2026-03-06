import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CarrerasType {
  @Field(() => Int)
  id_carreras: number;

  @Field()
  nombre: string;

  @Field()
  universidad: string;
}
