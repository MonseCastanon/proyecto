import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card/card.component';
import { HotelImagePipe } from './pipes/hotel-image.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { BuscarresComponent } from './pages/buscarres/buscarres.component';
import { InforesComponent } from './pages/infores/infores.component';
import { ListresComponent } from './pages/listres/listres.component';
import { NuevoresComponent } from './pages/nuevores/nuevores.component';
import { RestauranteComponent } from './components/card/restaurante/restaurante.component';
import { RestauranteImagePipe } from './pipes/restaurante-image.pipe';
import { InformacionComponent } from './pages/informacion/informacion.component';


@NgModule({
  declarations: [
    ListadoComponent,
    NuevoComponent,
    LayoutPageComponent,
    BuscarComponent,
    InformacionComponent,
    CardComponent,
    HotelImagePipe,
    ConfirmDialogComponent,
    BuscarresComponent,
    InforesComponent,
    ListresComponent,
    NuevoresComponent,
    RestauranteComponent,
    RestauranteImagePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdministradorRoutingModule,
    MaterialModule
  ]
})
export class AdministradorModule { }
