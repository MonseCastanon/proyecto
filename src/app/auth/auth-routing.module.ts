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

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[
      { path: 'atractivos', component: AtractivosComponent},
      { path: 'experiencias', component: ExperienciasComponent },
      { path: 'paquetes', component: PaquetesComponent },
      { path: 'formulario', component: FormularioComponent },
      { path: 'login', component: LoginComponent },
      { path: 'inicio', component: InicioComponent},
      { path: 'Agencias', component: AgenciasComponent},
      { path: '**', redirectTo: 'inicio'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
