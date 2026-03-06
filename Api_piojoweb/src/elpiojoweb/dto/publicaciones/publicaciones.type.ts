import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class PublicacionesType {
  @Field(() => Int)
  id_publicaciones: number;

  @Field()
  titulo: string;

  @Field({ nullable: true })
  descripcion?: string;

  @Field()
  categoria: string;

  @Field({ nullable: true })
  talla?: string;

  @Field({ nullable: true })
  marca?: string;

  @Field({ nullable: true })
  color?: string;

  @Field()
  genero: string;

  @Field()
  estado_uso: string;

  @Field(() => Float)
  precio: number;

  @Field()
  disponible: boolean;

  @Field()
  fecha_publicacion: string;
}
