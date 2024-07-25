import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  public sidebarItem=[
    {label:'Listado', icon:'label', url:'./listado'},
    {label:'Paquetes/Itinerarios', icon:'label', url:'./listpaq'},
    {label:'Añadir Paquete', icon:'add', url:'./nuevopaq'},
    // {label:'Buscar Paquete', icon:'search', url:'./buscarpaq'},
    {label:'Añadir Itinerario', icon:'add', url:'./nuevoiti'},
    // {label:'Buscar Itinerario', icon:'search', url:'./buscariti'},
    {label:'Añadir Hoteles', icon:'add', url:'./nuevo'},
    // {label:'Buscar Hoteles', icon:'search', url:'./buscar'},
    {label:'Añadir Restaurantes', icon:'add', url:'./nuevores'},
    // {label:'Buscar Restaurantes', icon:'search', url:'./buscarres'},
    {label:'Añadir Experiencia', icon:'add', url:'./nuevoexp'},
    // {label:'Buscar Experiencia', icon:'search', url:'./buscarexp'},
  ]
}
