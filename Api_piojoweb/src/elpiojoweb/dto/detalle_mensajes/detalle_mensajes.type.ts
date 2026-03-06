import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class DetalleMensajesType {
  @Field(() => Int)
  id_detalle_mensajes: number;

  @Field()
  mensaje: string;

  @Field()
  fecha_envio: string;
}
