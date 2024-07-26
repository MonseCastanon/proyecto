
import { Component, OnInit } from '@angular/core';
import { Experiencia } from "../../interfaces/experiencia.interface";
import { ExperienciasService } from '../../services/experiencias.service';
import { Hotel } from '../../interfaces/hotel.interface';
import { Restaurante } from '../../interfaces/restaurante.interface';
import { HotelesService } from '../../services/hotel.service';
import { RestaurantesService } from '../../services/restaurante.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styles: ``
})
export class ExperienciasComponent implements OnInit {
  public hoteles: Hotel[] = [];
  public restaurantes: Restaurante[] = [];
  public experiencias: Experiencia[] = [];



  constructor(
    private hotelesService: HotelesService,
    private restaurantesService: RestaurantesService,
    private experienciasService: ExperienciasService,
  ){}
  ngOnInit(): void {

    this.hotelesService.getHoteles()
    .subscribe(hoteles => this.hoteles = hoteles);

    this.restaurantesService.getRestaurantes()
    .subscribe(restaurantes => this.restaurantes = restaurantes);

    this.experienciasService.getExperiencias()
    .subscribe(experiencias => this.experiencias = experiencias);
    //Add 'implements OnInit' to the class.


  }

}
