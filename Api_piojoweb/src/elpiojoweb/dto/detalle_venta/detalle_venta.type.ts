import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class DetalleVentaType {
  @Field(() => Int)
  id_detalle_venta: number;

  @Field(() => Int)
  cantidad: number;

  @Field(() => Float)
  subtotal: number;
}
