import { Component, Input, OnInit } from '@angular/core';
import { Cultural } from '../../../interfaces/cultural.interface';

@Component({
  selector: 'culturales-cultural-card',
  templateUrl: './cultural.component.html',
  styles: ``
})
export class CulturalComponent implements OnInit {

  @Input()
  public cultural!: Cultural;
  ngOnInit(): void {
    if ( !this.cultural ) throw Error('Cultural property is required')
  }
}
