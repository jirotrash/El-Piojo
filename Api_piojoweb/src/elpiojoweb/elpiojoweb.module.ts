import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  Carreras,
  Conversaciones,
  DetalleVenta,
  DetalleMensajes,
  DetallePublicaciones,
  Estados,
  HistorialCupones,
  HistorialTratos,
  Municipios,
  Pagos,
  Publicaciones,
  PuntosEntrega,
  Roles,
  Usuarios,
} from './entities';

import { ElpiojowebResolver } from './elpiojoweb.resolver';
import { ElpiojowebService } from './elpiojoweb.service';
import { ElpiojowebController } from './elpiojoweb.controller';

// Services
import { CarrerasService } from './services/carreras/carreras.service';
import { ConversacionesService } from './services/conversaciones/conversaciones.service';
import { DetalleVentaService } from './services/detalle_venta/detalle_venta.service';
import { DetalleMensajesService } from './services/detalle_mensajes/detalle_mensajes.service';
import { DetallePublicacionesService } from './services/detalle_publicaciones/detalle_publicaciones.service';
import { EstadosService } from './services/estados/estados.service';
import { HistorialCuponesService } from './services/historial_cupones/historial_cupones.service';
import { HistorialTratosService } from './services/historial_tratos/historial_tratos.service';
import { MunicipiosService } from './services/municipios/municipios.service';
import { PagosService } from './services/pagos/pagos.service';
import { PublicacionesService } from './services/publicaciones/publicaciones.service';
import { PuntosEntregaService } from './services/puntos_entrega/puntos_entrega.service';
import { RolesService } from './services/roles/roles.service';
import { UsuariosService } from './services/usuarios/usuarios.service';

// Resolvers
import { CarrerasResolver } from './resolvers/carreras/carreras.resolver';
import { ConversacionesResolver } from './resolvers/conversaciones/conversaciones.resolver';
import { DetalleVentaResolver } from './resolvers/detalle_venta/detalle_venta.resolver';
import { DetalleMensajesResolver } from './resolvers/detalle_mensajes/detalle_mensajes.resolver';
import { DetallePublicacionesResolver } from './resolvers/detalle_publicaciones/detalle_publicaciones.resolver';
import { EstadosResolver } from './resolvers/estados/estados.resolver';
import { HistorialCuponesResolver } from './resolvers/historial_cupones/historial_cupones.resolver';
import { HistorialTratosResolver } from './resolvers/historial_tratos/historial_tratos.resolver';
import { MunicipiosResolver } from './resolvers/municipios/municipios.resolver';
import { PagosResolver } from './resolvers/pagos/pagos.resolver';
import { PublicacionesResolver } from './resolvers/publicaciones/publicaciones.resolver';
import { PuntosEntregaResolver } from './resolvers/puntos_entrega/puntos_entrega.resolver';
import { RolesResolver } from './resolvers/roles/roles.resolver';
import { UsuariosResolver } from './resolvers/usuarios/usuarios.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Carreras,
      Conversaciones,
      DetalleVenta,
      DetalleMensajes,
      DetallePublicaciones,
      Estados,
      HistorialCupones,
      HistorialTratos,
      Municipios,
      Pagos,
      Publicaciones,
      PuntosEntrega,
      Roles,
      Usuarios,
    ]),
  ],
  controllers: [ElpiojowebController],
  providers: [
    ElpiojowebResolver,
    ElpiojowebService,

    // Services
    CarrerasService,
    ConversacionesService,
    DetalleVentaService,
    DetalleMensajesService,
    DetallePublicacionesService,
    EstadosService,
    HistorialCuponesService,
    HistorialTratosService,
    MunicipiosService,
    PagosService,
    PublicacionesService,
    PuntosEntregaService,
    RolesService,
    UsuariosService,

    // Resolvers
    CarrerasResolver,
    ConversacionesResolver,
    DetalleVentaResolver,
    DetalleMensajesResolver,
    DetallePublicacionesResolver,
    EstadosResolver,
    HistorialCuponesResolver,
    HistorialTratosResolver,
    MunicipiosResolver,
    PagosResolver,
    PublicacionesResolver,
    PuntosEntregaResolver,
    RolesResolver,
    UsuariosResolver,
  ],
})
export class ElpiojowebModule {}