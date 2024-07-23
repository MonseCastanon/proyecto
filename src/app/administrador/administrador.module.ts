import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
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
import { NuevoresComponent } from './pages/nuevores/nuevores.component';
import { RestauranteComponent } from './components/card/restaurante/restaurante.component';
import { RestauranteImagePipe } from './pipes/restaurante-image.pipe';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BuscarexpComponent } from './pages/buscarexp/buscarexp.component';
import { NuevoexpComponent } from './pages/nuevoexp/nuevoexp.component';
import { ExperieciaComponent } from './components/card/experiecia/experiecia.component';
import { ExpImagePipe } from './pipes/exp-image.pipe';
import { InfoexpComponent } from './pages/infoexp/infoexp.component';


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
    NuevoresComponent,
    RestauranteComponent,
    RestauranteImagePipe,
    BuscarexpComponent,
    InfoexpComponent,
    NuevoexpComponent,
    ExperieciaComponent,
    ExpImagePipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdministradorRoutingModule,
    MaterialModule
  ]
})
export class AdministradorModule { }
