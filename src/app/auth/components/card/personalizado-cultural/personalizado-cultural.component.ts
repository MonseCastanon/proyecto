import { Component, Input, OnInit } from '@angular/core';
import { Cultural } from '../../../interfaces/cultural.interface';


@Component({
  selector: 'personalizado-cultural-card',
  templateUrl: './personalizado-cultural.component.html',
  styles: ``
})
export class PersonalizadoCulturalComponent implements OnInit {

  @Input()
  public cultural!: Cultural;
  ngOnInit(): void {
    if ( !this.cultural ) throw Error('Cultural property is required')
  }
}
