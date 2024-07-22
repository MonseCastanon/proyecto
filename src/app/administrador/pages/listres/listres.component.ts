import { Component, OnInit } from '@angular/core';
import { Restaurante } from '../../interfaces/restaurante.interface';
import { RestaurantesService } from '../../services/restaurante.service';

@Component({
  selector: 'app-listres',
  templateUrl: './listres.component.html',
  styles: ``
})
export class ListresComponent implements OnInit {
  public restaurantes: Restaurante[] = [];

  constructor(private restaurantesService: RestaurantesService){}
  ngOnInit(): void {
    this.restaurantesService.getRestaurantes()
    .subscribe(restaurantes => this.restaurantes = restaurantes);
  }

}
