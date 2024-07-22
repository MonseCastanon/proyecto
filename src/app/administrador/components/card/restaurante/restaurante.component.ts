import { Component, Input } from '@angular/core';
import { Restaurante } from '../../../interfaces/restaurante.interface';

@Component({
  selector: 'restaurantes-restaurante-card',
  templateUrl: './restaurante.component.html',
  styles: ``
})
export class RestauranteComponent {

  @Input()
  public restaurante!: Restaurante;
  ngOnInit(): void {
    if ( !this.restaurante ) throw Error('Restaurante property is required')
  }

}
