import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { NuevoresComponent } from './pages/nuevores/nuevores.component';
import { BuscarresComponent } from './pages/buscarres/buscarres.component';
import { ListresComponent } from './pages/listres/listres.component';
import { InforesComponent } from './pages/infores/infores.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[
      { path: 'nuevores', component: NuevoresComponent },
      { path: 'buscarres', component: BuscarresComponent },
      { path: 'listres', component: ListresComponent },
      { path: 'editarres/:id', component: NuevoresComponent },
      { path: 'nuevo', component: NuevoComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: 'listado', component: ListadoComponent },
      { path: 'editar/:id', component: NuevoComponent },
      { path: ':id', component: InformacionComponent },
      { path: ':id', component: InforesComponent },
      { path: '**', redirectTo: 'listado' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
