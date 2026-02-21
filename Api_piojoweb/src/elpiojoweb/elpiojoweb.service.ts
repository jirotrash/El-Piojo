import { Injectable } from '@nestjs/common';
import { CreateElpiojowebInput } from './dto/create-elpiojoweb.input';
import { UpdateElpiojowebInput } from './dto/update-elpiojoweb.input';

@Injectable()
export class ElpiojowebService {
  create(createElpiojowebInput: CreateElpiojowebInput) {
    // placeholder implementation
    return { id: 1, ...createElpiojowebInput } as any;
  }

  findAll() {
    return [] as any[];
  }

  findOne(id: number) {
    return null;
  }

  update(id: number, updateElpiojowebInput: UpdateElpiojowebInput) {
    return { id, ...updateElpiojowebInput } as any;
  }

  remove(id: number) {
    return true;
  }
}
