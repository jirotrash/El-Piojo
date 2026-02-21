import { Controller, Get, Param, ParseIntPipe, Post, Body, BadRequestException, Headers } from '@nestjs/common';
import { ElpiojowebService } from './elpiojoweb.service';
import { EstadosService } from './services/estados/estados.service';
import { MunicipiosService } from './services/municipios/municipios.service';
import { CreateEstadosInput } from './dto/estados/create-estados.input';
import { CreateMunicipiosInput } from './dto/municipios/create-municipios.input';

@Controller('api/elpiojoweb')
export class ElpiojowebController {
  constructor(
    private readonly elpiojowebService: ElpiojowebService,
    private readonly estadosService: EstadosService,
    private readonly municipiosService: MunicipiosService,
  ) {}

  @Get()
  findAll() {
    return this.elpiojowebService.findAll();
  }

  @Get('estados')
  findEstados() {
    return this.estadosService.findAll();
  }

  @Get('estados/:id')
  findEstado(@Param('id', ParseIntPipe) id: number) {
    return this.estadosService.findOne(id);
  }

  @Get('municipios')
  findMunicipios() {
    return this.municipiosService.findAll();
  }

  @Get('municipios/:id')
  findMunicipio(@Param('id', ParseIntPipe) id: number) {
    return this.municipiosService.findOne(id);
  }

  @Post('estados')
  createEstado(@Body() body: any, @Headers('content-type') contentType?: string) {
    // basic JSON/content-type validation for helpful error messages in Insomnia/Postman
    if (contentType && !contentType.includes('application/json')) {
      throw new BadRequestException('Content-Type must be application/json');
    }
    // body should already be parsed by Nest; validate expected shape
    const dto: CreateEstadosInput = body;
    if (!dto || typeof dto.nombre !== 'string') {
      throw new BadRequestException('Invalid payload: { "nombre": "..." } expected');
    }
    return this.estadosService.create(dto as any);
  }

  @Post('municipios')
  createMunicipio(@Body() body: any, @Headers('content-type') contentType?: string) {
    if (contentType && !contentType.includes('application/json')) {
      throw new BadRequestException('Content-Type must be application/json');
    }
    const dto: CreateMunicipiosInput = body;
    if (!dto || typeof dto.nombre !== 'string' || typeof dto.id_estados !== 'number') {
      throw new BadRequestException('Invalid payload: { "id_estados": 1, "nombre": "..." } expected');
    }
    return this.municipiosService.create(dto as any);
  }
}
