import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { RolesService } from '../../services/roles/roles.service';
import { RolesType } from '../../dto/roles/roles.type';

@Resolver(() => RolesType)
export class RolesResolver {
  constructor(private readonly rolesService: RolesService) {}

  @Query(() => [RolesType], { name: 'roles' })
  findAll() {
    return this.rolesService.findAll();
  }

  @Query(() => RolesType, { name: 'role' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.rolesService.findOne(id);
  }
}

