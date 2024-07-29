import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from '../../../interfaces/experiencia.interface';

@Component({
  selector: 'experiencias-experiencia-card',
  templateUrl: './experiecia.component.html',
  styleUrl: './experiencia.component.css'
})
export class ExperieciaComponent implements OnInit {

  @Input()
  public experiencia!: Experiencia;
  ngOnInit(): void {
    if ( !this.experiencia ) throw Error('Experiencia property is required')
  }

}

