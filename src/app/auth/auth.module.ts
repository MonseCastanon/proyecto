import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AtractivosComponent } from './pages/atractivos/atractivos.component';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './components/card/card/card.component';
import { HotelImagePipe } from './pipes/hotel-image.pipe';
import { AgenciasComponent } from './pages/agencias/agencias.component';
import { OlvidarpassComponent } from './pages/olvidarpass/olvidarpass.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    AtractivosComponent,
    ExperienciasComponent,
    PaquetesComponent,
    FormularioComponent,
    LoginComponent,
    InicioComponent,
    CardComponent,
    HotelImagePipe,
    AgenciasComponent,
    OlvidarpassComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
