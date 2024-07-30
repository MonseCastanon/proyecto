import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../interfaces/hotel.interface';
import { Restaurante } from '../../interfaces/restaurante.interface';
import { HotelesService } from '../../services/hotel.service';
import { RestaurantesService } from '../../services/restaurante.service';
import { Cultural } from '../../interfaces/cultural.interface';
import { CulturalesService } from '../../services/cultural.service';
import { Agencia } from '../../interfaces/agencia.interface';
import { AgenciasService } from '../../services/agencia.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit {
  public hoteles: Hotel[] = [];
  public restaurantes: Restaurante[] = [];
  public culturales: Cultural[] = [];
  public agencias: Agencia[] = [];

  constructor(
    private hotelesService: HotelesService,
    private restaurantesService: RestaurantesService,
    private culturalesService: CulturalesService,
    private agenciasService: AgenciasService
  ){}
  ngOnInit(): void {
    this.hotelesService.getHoteles()
    .subscribe(hoteles => this.hoteles = hoteles);

    this.restaurantesService.getRestaurantes()
    .subscribe(restaurantes => this.restaurantes = restaurantes);

    this.culturalesService.getCulturales()
    .subscribe(culturales => this.culturales = culturales);

    this.agenciasService.getAgencias()
    .subscribe(agencias => this.agencias = agencias);
  }
}
