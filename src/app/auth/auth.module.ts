import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { AuthRoutingModule } from './auth-routing.module';
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
import { ExperienciaImagePipe } from './pipes/experiencia-image.pipe';
import { ExperienciaComponent } from './components/card/experiencia/experiencia.component';
import { InfoexpComponent } from './pages/infoexp/infoexp.component';
import { NaturalImagePipe } from './pipes/natural-image.pipe';
import { NaturalComponent } from './components/card/natural/natural.component';
import { CulturalComponent } from './components/card/cultural/cultural.component';
import { CulturalImagePipe } from './pipes/cultural-image.pipe';
import { InforesComponent } from './pages/infores/infores.component';
import { InfohotelComponent } from './pages/infohotel/infohotel.component';
import { AgenciaComponent } from './components/card/agencia/agencia.component';
import { InfoageComponent } from './pages/infoage/infoage.component';
import { AgenciaImagePipe } from './pipes/agencia-image.pipe';
import { PersonalizadoAgenciaComponent } from './components/card/personalizado-agencia/personalizado.agencia';
import { PersonalizadoCulturalComponent } from './components/card/personalizado-cultural/personalizado-cultural.component';
import { AtractivoImagePipe } from './pipes/atractivo-image.pipe';
import { AtractivosComponent } from './pages/atractivos/atractivos.component';
import { InfoitiComponent } from './pages/infoiti/infoiti.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LayoutPageComponent,
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
    PersonalizadoAgenciaComponent,
    PersonalizadoCulturalComponent,
    PaqueteImagePipe,
    PaqueteComponent,
    InfopaqComponent,
    NaturalImagePipe,
    NaturalComponent,
    CulturalComponent,
    CulturalImagePipe,
    InforesComponent,
    AgenciasComponent,
    InfohotelComponent,
    AgenciaComponent,
    InfoageComponent,
    AgenciaImagePipe,
    AtractivoImagePipe,
    AtractivosComponent,
    InfoitiComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class AuthModule { }
