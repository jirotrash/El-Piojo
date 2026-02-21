import { InputType, Field } from '@nestjs/graphql';
import { IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateElpiojowebInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  name?: string;
}
