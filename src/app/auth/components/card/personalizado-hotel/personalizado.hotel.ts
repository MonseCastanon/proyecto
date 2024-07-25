import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../../../interfaces/hotel.interface';
import { Restaurante } from '../../../interfaces/restaurante.interface';


@Component({
  selector: 'personalizado-hotel-card',
  templateUrl: './personalizado.hotel.html',
  styles: '',
})
export class PersonalizadoHotelComponent implements OnInit {

  @Input()
  public hotel!: Hotel;
  ngOnInit(): void {
    if (!this.hotel)
      throw new Error('Hotel property is required');

  }
}

