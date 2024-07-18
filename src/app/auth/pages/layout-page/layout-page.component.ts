import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {
  public sidebarItem=[
    {label:'Inicio', icon:'label', url:'./inicio'},
    {label:'Login', icon:'label', url:'./login'},
    {label:'Atractivos', icon:'add', url:'./atractivos'},
    {label:'Experiencias', icon:'search', url:'./experiencias'},
    {label:'Paquetes', icon:'search', url:'./paquetes'},
    {label:'Paquete personalizado', icon:'search', url:'./formulario'},
  ]
}
