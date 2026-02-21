import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Elpiojoweb {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  name?: string;
}
