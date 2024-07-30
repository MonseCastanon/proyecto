import { Component, Input, OnInit } from '@angular/core';
import { Agencia } from '../../../interfaces/agencia.interface';


@Component({
  selector: 'personalizado-agencia-card',
  templateUrl: './personalizado.agencia.html',
  styles: '',
})
export class PersonalizadoAgenciaComponent implements OnInit {

  @Input()
  public agencia!: Agencia;
  ngOnInit(): void {
    if ( !this.agencia ) throw Error('Agencia property is required')
  }
}
