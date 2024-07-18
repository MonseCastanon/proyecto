import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  public sidebarItem=[
    {label:'Listado', icon:'label', url:'./listado'},
    {label:'Añadir', icon:'add', url:'./nuevo'},
    {label:'Buscar', icon:'search', url:'./buscar'},
  ]
}
