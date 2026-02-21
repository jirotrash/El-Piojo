import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ElpiojowebService } from './elpiojoweb.service';
import { Elpiojoweb } from './entities/elpiojoweb.entity';
import { CreateElpiojowebInput } from './dto/create-elpiojoweb.input';
import { UpdateElpiojowebInput } from './dto/update-elpiojoweb.input';

@Resolver(() => Elpiojoweb)
export class ElpiojowebResolver {
  constructor(private readonly elpiojowebService: ElpiojowebService) {}

  @Mutation(() => Elpiojoweb)
  createElpiojoweb(@Args('createElpiojowebInput') createElpiojowebInput: CreateElpiojowebInput) {
    return this.elpiojowebService.create(createElpiojowebInput);
  }

  @Query(() => [Elpiojoweb], { name: 'elpiojoweb' })
  findAll() {
    return this.elpiojowebService.findAll();
  }

  @Query(() => Elpiojoweb, { name: 'elpiojoweb' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.elpiojowebService.findOne(id);
  }

  @Mutation(() => Elpiojoweb)
  updateElpiojoweb(@Args('updateElpiojowebInput') updateElpiojowebInput: UpdateElpiojowebInput) {
    return this.elpiojowebService.update(updateElpiojowebInput.id, updateElpiojowebInput);
  }

  @Mutation(() => Elpiojoweb)
  removeElpiojoweb(@Args('id', { type: () => Int }) id: number) {
    return this.elpiojowebService.remove(id);
  }
}
