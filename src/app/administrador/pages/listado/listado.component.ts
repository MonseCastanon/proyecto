import { Component, OnInit } from '@angular/core';
import { HotelesService } from '../../services/hotel.service';
import { Hotel } from '../../interfaces/hotel.interface';
import { Restaurante } from '../../interfaces/restaurante.interface';
import { RestaurantesService } from '../../services/restaurante.service';
import { Experiencia } from '../../interfaces/experiencia.interface';
import { ExperienciasService } from '../../services/experiencia.service';
import { Atractivo } from '../../interfaces/atractivo.interface';
import { AtractivosService } from '../../services/atractivo.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit {
  public hoteles: Hotel[] = [];
  public restaurantes: Restaurante[] = [];
  public atractivos: Atractivo[] = [];
  public experiencias: Experiencia[] = [];

  constructor(
    private hotelesService: HotelesService,
    private restaurantesService: RestaurantesService,
    private atractivosService: AtractivosService,
    private experienciasService: ExperienciasService
  ){}
  ngOnInit(): void {
    this.hotelesService.getHoteles()
    .subscribe(hoteles => this.hoteles = hoteles);

    this.restaurantesService.getRestaurantes()
    .subscribe(restaurantes => this.restaurantes = restaurantes);

    this.atractivosService.getAtractivos()
    .subscribe(atractivos => this.atractivos = atractivos);

    this.experienciasService.getExperiencias()
    .subscribe(experiencias => this.experiencias = experiencias);
  }

}
