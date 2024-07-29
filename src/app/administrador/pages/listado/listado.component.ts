import { Component, OnInit } from '@angular/core';
import { HotelesService } from '../../services/hotel.service';
import { Hotel } from '../../interfaces/hotel.interface';
import { Restaurante } from '../../interfaces/restaurante.interface';
import { RestaurantesService } from '../../services/restaurante.service';
import { Experiencia } from '../../interfaces/experiencia.interface';
import { ExperienciasService } from '../../services/experiencia.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {
  public hoteles: Hotel[] = [];
  public restaurantes: Restaurante[] = [];
  public experiencias: Experiencia[] = [];

  constructor(
    private hotelesService: HotelesService,
    private restaurantesService: RestaurantesService,
    private experienciasService: ExperienciasService
  ){}
  ngOnInit(): void {
    this.hotelesService.getHoteles()
    .subscribe(hoteles => this.hoteles = hoteles);

    this.restaurantesService.getRestaurantes()
    .subscribe(restaurantes => this.restaurantes = restaurantes);

    this.experienciasService.getExperiencias()
    .subscribe(experiencias => this.experiencias = experiencias);
  }

}
