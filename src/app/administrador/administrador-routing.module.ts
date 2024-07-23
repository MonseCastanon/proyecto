import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NuevoComponent } from './pages/nuevo/nuevo.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { NuevoresComponent } from './pages/nuevores/nuevores.component';
import { BuscarresComponent } from './pages/buscarres/buscarres.component';
import { InforesComponent } from './pages/infores/infores.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { NuevoexpComponent } from './pages/nuevoexp/nuevoexp.component';
import { BuscarexpComponent } from './pages/buscarexp/buscarexp.component';
import { InfoexpComponent } from './pages/infoexp/infoexp.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children:[
      { path: 'listado', component: ListadoComponent },

      { path: 'nuevores', component: NuevoresComponent },
      { path: 'buscarres', component: BuscarresComponent },
      { path: 'editarres/:id', component: NuevoresComponent },
      { path: 'restaurantes/:id', component: InforesComponent },

      { path: 'nuevoexp', component: NuevoexpComponent },
      { path: 'buscarexp', component: BuscarexpComponent },
      { path: 'editarexp/:id', component: NuevoexpComponent },
      { path: 'experiencias/:id', component: InfoexpComponent },

      { path: 'nuevo', component: NuevoComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: 'editar/:id', component: NuevoComponent },
      { path: 'hoteles/:id', component: InformacionComponent },

      { path: '**', redirectTo: 'listado' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
