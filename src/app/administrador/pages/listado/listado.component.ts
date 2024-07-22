import { Component, OnInit } from '@angular/core';
import { HotelesService } from '../../services/hotel.service';
import { Hotel } from '../../interfaces/hotel.interface';
import { Restaurante } from '../../interfaces/restaurante.interface';
import { RestaurantesService } from '../../services/restaurante.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: ``
})
export class ListadoComponent implements OnInit {
  public hoteles: Hotel[] = [];
  public restaurantes: Restaurante[] = [];

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
