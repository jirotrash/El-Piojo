import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class HistorialCuponesType {
  @Field(() => Int)
  id_historial_cupones: number;

  @Field(() => Float)
  monto: number;

  @Field()
  fecha_expiracion: string;
}
