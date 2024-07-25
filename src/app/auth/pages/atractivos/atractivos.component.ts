import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../interfaces/hotel.interface';
import { HotelesService } from '../../services/hotel.service';
import { Restaurante } from '../../interfaces/restaurante.interface';
import { RestaurantesService } from '../../services/restaurante.service';

@Component({
  selector: 'app-atractivos',
  templateUrl: './atractivos.component.html',
  styles: ``
})
export class AtractivosComponent implements OnInit {
  public hoteles: Hotel[] = [];
  public restaurantes: Restaurante[] = [];
experiencias: any;

  constructor(
    private hotelesService: HotelesService,
    private restaurantesService: RestaurantesService
  ){}
  ngOnInit(): void {
    this.hotelesService.getHoteles()
    .subscribe(hoteles => this.hoteles = hoteles);

    this.restaurantesService.getRestaurantes()
    .subscribe(restaurantes => this.restaurantes = restaurantes);
  }
}
