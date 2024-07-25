import { Component, OnInit } from '@angular/core';
import { Paquete } from '../../interfaces/paquete.interface';
import { PaquetesService } from '../../services/paquete.service';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrl: './paquetes.component.css',
})
export class PaquetesComponent implements OnInit {
  public paquetes: Paquete[] = [];

  constructor(
    private paquetesService: PaquetesService,
  ){}
  ngOnInit(): void {
    this.paquetesService.getPaquetes()
    .subscribe(paquetes => this.paquetes = paquetes);
  }
}
