import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  public sidebarItem=[
    {label:'Inicio', icon:'home', url:'./inicio'},
    {label:'Atractivos', icon:'stars', url:'./atractivos'},
    {label:'Experiencias', icon:'stars', url:'./experiencias'},
    {label:'Paquetes', icon:'folder', url:'./paquetes'},
    {label:'Paquete personalizado', icon:'folder_open', url:'./formulario'},
    {label:'Contacto Agencias', icon:'assistant', url:'./agencias'},
    {label:'Administrador', icon:'label_important', url:'./login'},
  ]
}
