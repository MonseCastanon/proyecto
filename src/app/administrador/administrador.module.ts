import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { ListadoComponent } from './pages/listado/listado.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { EditarComponent } from './pages/editar/editar.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card/card.component';
import { HotelImagePipe } from './pipes/hotel-image.pipe';


@NgModule({
  declarations: [
    ListadoComponent,
    NuevoComponent,
    LayoutPageComponent,
    BuscarComponent,
    EditarComponent,
    InformacionComponent,
    CardComponent,
    HotelImagePipe
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    MaterialModule
  ]
})
export class AdministradorModule { }
