import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../interfaces/hotel.interface';
import { Restaurante } from '../../interfaces/restaurante.interface';
import { Agencia } from '../../interfaces/agencia.interface';
import { HotelesService } from '../../services/hotel.service';
import { RestaurantesService } from '../../services/restaurante.service';
import { AgenciasService } from '../../services/agencia.service';
import { Atractivo } from '../../interfaces/atractivo.interface';
import { AtractivosService } from '../../services/atractivo.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public hoteles: Hotel[] = [];
  public restaurantes: Restaurante[] = [];
  public agencias: Agencia[] = [];
  public atractivos: Atractivo[] = [];

  // Nuevas propiedades para los campos adicionales
  public dias: number = 0;
  public noches: number = 0;
  public adultos: number = 0;
  public ninos: number = 0;
  public nombre: string = '';
  public correo: string = '';
  public telefono: string = '';
  public fechaInicial: Date = new Date();
  public transporte: string = '';

  constructor(
    private hotelesService: HotelesService,
    private restaurantesService: RestaurantesService,
    private agenciasService: AgenciasService,
    private atractivosService: AtractivosService,
  ) { }

  ngOnInit(): void {
    this.hotelesService.getHoteles()
      .subscribe(hoteles => this.hoteles = hoteles);

    this.restaurantesService.getRestaurantes()
      .subscribe(restaurantes => this.restaurantes = restaurantes);

    this.atractivosService.getAtractivos()
      .subscribe(atractivos => this.atractivos = atractivos);

    this.agenciasService.getAgencias()
      .subscribe(agencias => {
        this.agencias = agencias;
        this.agencias.forEach(agencia => agencia.selected = false);
      });
  }

  actualizarSeleccion(hotel: Hotel) {
    const index = this.hoteles.findIndex(h => h.id === hotel.id);
    if (index !== -1) {
      this.hoteles[index] = hotel;
    }
  }

  actualizarSeleccionRestaurante(restaurante: Restaurante) {
    const index = this.restaurantes.findIndex(r => r.id === restaurante.id);
    if (index !== -1) {
      this.restaurantes[index] = restaurante;
    }
  }

  actualizarSeleccionAtractivo(atractivo: Atractivo) {
    const index = this.atractivos.findIndex(a => a.id === atractivo.id);
    if (index !== -1) {
      this.atractivos[index] = atractivo;
    }
  }

  enviarFormulario(): void {
    const seleccionados = {
      hoteles: this.hoteles.filter(h => h.selected),
      restaurantes: this.restaurantes.filter(r => r.selected),
      agencia: this.agencias.find(a => a.selected)?.correo,
      atractivos: this.atractivos.filter(at => at.selected),
      // Nuevos campos
      dias: this.dias,
      noches: this.noches,
      adultos: this.adultos,
      ninos: this.ninos,
      nombre: this.nombre,
      correo: this.correo,
      telefono: this.telefono,
      fechaInicial: this.fechaInicial,
      transporte: this.transporte,
    };
    console.log(seleccionados);
  }
}
