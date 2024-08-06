import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { LoginComponent } from './pages/login/login.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AgenciasComponent } from './pages/agencias/agencias.component';
import { InfoatraComponent } from './pages/infoatra/infoatra.component';
import { InfoexpComponent } from './pages/infoexp/infoexp.component';
import { InfohotelComponent } from './pages/infohotel/infohotel.component';
import { InfopaqComponent } from './pages/infopaq/infopaq.component';
import { InfoageComponent } from './pages/infoage/infoage.component';
import { OlvidarpassComponent } from './pages/olvidarpass/olvidarpass.component';
import { InfoitiComponent } from './pages/infoiti/infoiti.component';
import { AtractivosComponent } from './pages/atractivos/atractivos.component';
import { InforesComponent } from './pages/infores/infores.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[
      { path: 'atractivos', component: AtractivosComponent},
      { path: 'experiencias', component: ExperienciasComponent },
      { path: 'restaurantes/:id', component: InforesComponent },
      { path: 'experiencias/:id', component: InfoexpComponent },
      { path: 'hoteles/:id', component: InfohotelComponent },
      { path: 'paquetes/:id', component: InfopaqComponent },
      { path: 'agencias/:id', component: InfoageComponent},
      { path: 'itinerario/:id', component: InfoitiComponent },
      { path: 'paquetes', component: PaquetesComponent },
      { path: 'olvidarpass', component: OlvidarpassComponent},
      { path: 'formulario', component: FormularioComponent },
      { path: 'login', component: LoginComponent },
      { path: 'inicio', component: InicioComponent},
      { path: 'agencias', component: AgenciasComponent},
      { path: '**', redirectTo: 'inicio'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
