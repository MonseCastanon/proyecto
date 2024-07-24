import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { AtractivosComponent } from './pages/atractivos/atractivos.component';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';
import { PaquetesComponent } from './pages/paquetes/paquetes.component';
import { LoginComponent } from './pages/login/login.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AgenciasComponent } from './pages/agencias/agencias.component';
import { InfoatraComponent } from './pages/infoatra/infoatra.component';
import { OlvidarpassComponent } from './pages/olvidarpass/olvidarpass.component';
import { NuevapassComponent } from './pages/nuevapass/nuevapass.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[
      { path: 'atractivos', component: AtractivosComponent},
      { path: 'restaurantes/:id', component: InfoatraComponent },
      { path: 'experiencias', component: ExperienciasComponent },
      { path: 'paquetes', component: PaquetesComponent },
      { path: 'formulario', component: FormularioComponent },
      { path: 'login', component: LoginComponent },
      { path: 'olvidarpass', component: OlvidarpassComponent},
      { path: 'nuevapass', component: NuevapassComponent},
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
