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
import { RestauranteComponent } from './components/card/restaurante/restaurante.component';
import { RestauranteImagePipe } from './pipes/restaurante-image.pipe';
import { InfoatraComponent } from './pages/infoatra/infoatra.component';
import { PaqueteImagePipe } from './pipes/paquete-image.pipe';
import { PaqueteComponent } from './components/card/paquete/paquete.component';
import { InfopaqComponent } from './pages/infopaq/infopaq.component';
import { PersonalizadoHotelComponent } from './components/card/personalizado-hotel/personalizado.hotel';
import { PersonalizadoRestauranteComponent } from './components/card/personalizado-restaurante/personalizado.rest';
import { NuevapassComponent } from './pages/nuevapass/nuevapass.component';
import { ExperienciaImagePipe } from './pipes/experiencia-image.pipe';
import { ExperienciaComponent } from './components/card/experiencia/experiencia.component';
import { InfoexpComponent } from './pages/infoexp/infoexp.component';
import { NaturalImagePipe } from './pipes/natural-image.pipe';
import { NaturalComponent } from './components/card/natural/natural.component';
import { CulturalComponent } from './components/card/cultural/cultural.component';
import { CulturalImagePipe } from './pipes/cultural-image.pipe';
import { InforesComponent } from './pages/infores/infores.component';
import { InfohotelComponent } from './pages/infohotel/infohotel.component';
import { InfonatComponent } from './pages/infonat/infonat.component';
import { InfoculComponent } from './pages/infocul/infocul.component';
import { AgenciaComponent } from './components/card/agencia/agencia.component';
import { InfoageComponent } from './pages/infoage/infoage.component';
import { AgenciaImagePipe } from './pipes/agencia-image.pipe';
import { PersonalizadoCulturalComponent } from './components/card/perzonalizado-cultural/Personalizado-cultural.component';
import { PersonalizadoAgenciaComponent } from './components/card/personalizado-agencia/personalizado.agencia';


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
    OlvidarpassComponent,
    RestauranteComponent,
    RestauranteImagePipe,
    InfoatraComponent,
    ExperienciaImagePipe,
    ExperienciaComponent,
    InfoexpComponent,
    PersonalizadoHotelComponent,
    PersonalizadoRestauranteComponent,
    PersonalizadoCulturalComponent,
    PersonalizadoAgenciaComponent,
    PaqueteImagePipe,
    PaqueteComponent,
    InfopaqComponent,
    NuevapassComponent,
    NaturalImagePipe,
    NaturalComponent,
    CulturalComponent,
    CulturalImagePipe,
    InforesComponent,
    AgenciasComponent,
    InfohotelComponent,
    InfonatComponent,
    InfoculComponent,
    AgenciaComponent,
    InfoageComponent,
    AgenciaImagePipe,

  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule
  ]
})
export class AuthModule { }
