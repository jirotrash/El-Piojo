import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class PagosType {
  @Field(() => Int)
  id_pagos: number;

  @Field(() => Float)
  total: number;

  @Field(() => Float)
  total_con_descuento: number;

  @Field()
  metodo_pago: string;

  @Field()
  estado: string;

  @Field()
  fecha_pago: string;

  @Field({ nullable: true })
  url_comprobante?: string;
}
