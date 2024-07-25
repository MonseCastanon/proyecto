
import { Component, OnInit } from '@angular/core';
import { Experiencia } from "../../interfaces/experiencia.interface";
import { ExperienciasService } from '../../services/experiencias.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styles: ``
})
export class ExperienciasComponent implements OnInit {
  public experiencias: Experiencia[] = [];


  constructor(
    private experienciasService: ExperienciasService
  ){}
  ngOnInit(): void {
    this.experienciasService.getExperiencias()
    .subscribe(experiencias => this.experiencias = experiencias);
    //Add 'implements OnInit' to the class.

  }

}
