import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  public sidebarItem=[
    {label:'Listado Hoteles', icon:'label', url:'./listado'},
    {label:'Añadir Hoteles', icon:'add', url:'./nuevo'},
    {label:'Buscar Hoteles', icon:'search', url:'./buscar'},
    {label:'Listado Restaurantes', icon:'label', url:'./listres'},
    {label:'Añadir Restaurantes', icon:'add', url:'./nuevores'},
    {label:'Buscar Restaurantes', icon:'search', url:'./buscarres'},
  ]
}
