import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ConversacionesType {
  @Field(() => Int)
  id_conversaciones: number;

  @Field()
  fecha_creacion: string;
}
