import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { InformacionComponent } from './pages/informacion/informacion.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[
      { path: 'nuevo', component: NuevoComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: 'listado', component: ListadoComponent },
      { path: 'editar/:id', component: NuevoComponent },
      { path: ':id', component: InformacionComponent },
      { path: '**', redirectTo: 'listado' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
