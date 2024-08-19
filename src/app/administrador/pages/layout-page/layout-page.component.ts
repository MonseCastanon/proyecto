import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: './layout-page.component.css',
})

export class LayoutPageComponent {

  public sidebarItem=[
    {label:'Agencias', icon:'label', url:'./listage'},
    {label:'Lugares', icon:'label', url:'./listado'},
    {label:'Atractivos', icon:'label', url:'./listatra'},
    {label:'Paquetes/Itinerarios', icon:'label', url:'./listpaq'},
    {label:'Añadir Agencia', icon:'add', url:'./nuevoage'},
    // {label:'Buscar Agencia', icon:'search', url:'./buscarage'},
    {label:'Añadir Paquete', icon:'add', url:'./nuevopaq'},
    // {label:'Buscar Paquete', icon:'search', url:'./buscarpaq'},
    {label:'Añadir Itinerario', icon:'add', url:'./nuevoiti'},
    // {label:'Buscar Itinerario', icon:'search', url:'./buscariti'},
    {label:'Añadir Hoteles', icon:'add', url:'./nuevo'},
    // {label:'Buscar Hoteles', icon:'search', url:'./buscar'},
    {label:'Añadir Restaurante', icon:'add', url:'./nuevores'},
    // {label:'Buscar Restaurantes', icon:'search', url:'./buscarres'},
    {label:'Añadir Atractivo', icon:'add', url:'./nuevoatra'},
    // {label:'Buscar Atractivo', icon:'search', url:'./buscaratra'},
    {label:'Añadir Experiencia', icon:'add', url:'./nuevoexp'},
    // {label:'Buscar Experiencia', icon:'search', url:'./buscarexp'},
  ]
}

