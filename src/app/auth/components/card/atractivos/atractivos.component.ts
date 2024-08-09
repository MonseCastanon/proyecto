import { Component, Input, OnInit } from '@angular/core';
import { Atractivo } from '../../../../administrador/interfaces/atractivo.interface';

@Component({
  selector: 'atractivos-atractivo-card',
  templateUrl: './atractivos.component.html',
  styleUrl: './atractivos.component.css'
})
export class AtractivosComponent implements OnInit {

  @Input()
  public atractivo!: Atractivo;
  ngOnInit(): void {
    if ( !this.atractivo ) throw Error('Atractivo property is required')
  }

}
