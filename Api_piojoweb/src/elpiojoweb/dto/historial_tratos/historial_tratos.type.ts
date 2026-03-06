import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class HistorialTratosType {
  @Field(() => Int)
  id_historial_tratos: number;

  @Field()
  fecha_cierre: string;

  @Field(() => Int, { nullable: true })
  calificacion?: number;

  @Field({ nullable: true })
  comentario?: string;
}
