import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Asegúrate de importar HttpClient
import { Hotel } from '../../interfaces/hotel.interface';
import { Restaurante } from '../../interfaces/restaurante.interface';
import { Cultural } from '../../interfaces/cultural.interface';
import { Agencia } from '../../interfaces/agencia.interface';
import { Natural } from '../../interfaces/natural.interface'; // Si se usa
import { Experiencia } from '../../interfaces/experiencia.interface'; // Si se usa
import { HotelesService } from '../../services/hotel.service';
import { RestaurantesService } from '../../services/restaurante.service';
import { CulturalesService } from '../../services/cultural.service';
import { AgenciasService } from '../../services/agencia.service';
import { NaturalesService } from '../../services/natural.service'; // Si se usa
import { ExperienciasService } from '../../services/experiencias.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public hoteles: Hotel[] = [];
  public restaurantes: Restaurante[] = [];
  public culturales: Cultural[] = [];
  public agencias: Agencia[] = [];
  public naturales: Natural[] = []; // Si se usa
  public experiencias: Experiencia[] = []; // Si se usa

  constructor(
    private hotelesService: HotelesService,
    private restaurantesService: RestaurantesService,
    private culturalesService: CulturalesService,
    private agenciasService: AgenciasService,
    private naturalesService: NaturalesService, // Si se usa
    private experienciasService: ExperienciasService, // Si se usa
    private http: HttpClient // Asegúrate de inyectar HttpClient
  ) {}

  ngOnInit(): void {
    this.hotelesService.getHoteles()
      .subscribe(hoteles => this.hoteles = hoteles);

    this.restaurantesService.getRestaurantes()
      .subscribe(restaurantes => this.restaurantes = restaurantes);

    this.culturalesService.getCulturales()
      .subscribe(culturales => this.culturales = culturales);

    this.agenciasService.getAgencias()
      .subscribe(agencias => {
        this.agencias = agencias;
        this.agencias.forEach(agencia => agencia.selected = false);
      });

    // Si se usa, cargar otros datos
    if (this.naturalesService) {
      this.naturalesService.getNaturales()
        .subscribe(naturales => this.naturales = naturales);
    }

    if (this.experienciasService) {
      this.experienciasService.getExperiencias()
        .subscribe(experiencias => this.experiencias = experiencias);
    }
  }

  enviarFormulario(): void {
    // Recolectar datos del formulario
    const seleccionados = {
      hoteles: this.hoteles.filter(h => h.selected),
      restaurantes: this.restaurantes.filter(r => r.selected),
      culturales: this.culturales.filter(c => c.selected),
      agencia: this.agencias.find(a => a.selected)?.nombre
    };

    // Enviar datos al servidor
    this.http.post('/api/enviar-correo', seleccionados)
      .subscribe(
        response => alert('Correo enviado exitosamente'),
        error => alert('Error al enviar el correo')
      );
  }
}
