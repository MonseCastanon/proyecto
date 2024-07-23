import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  public sidebarItem=[
    {label:'Listado', icon:'label', url:'./listado'},
    {label:'Añadir Hoteles', icon:'add', url:'./nuevo'},
    {label:'Buscar Hoteles', icon:'search', url:'./buscar'},
    {label:'Añadir Restaurantes', icon:'add', url:'./nuevores'},
    {label:'Buscar Restaurantes', icon:'search', url:'./buscarres'},
    {label:'Añadir Experiencia', icon:'add', url:'./nuevoexp'},
    {label:'Buscar Experiencia', icon:'search', url:'./buscarexp'},
  ]
}
