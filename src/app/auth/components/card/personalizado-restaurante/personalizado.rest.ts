import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../../../interfaces/hotel.interface';
import { Restaurante } from '../../../interfaces/restaurante.interface';


@Component({
  selector: 'personalizado-restaurante-card',
  templateUrl: './personalizado.rest.html',
  styles: '',
})
export class PersonalizadoRestauranteComponent implements OnInit {

  @Input()
  public restaurante!: Restaurante;
  ngOnInit(): void {
    if ( !this.restaurante ) throw Error('Restaurante property is required')
  }
}
