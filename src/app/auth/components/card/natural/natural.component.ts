import { Component, Input, OnInit } from '@angular/core';
import { Natural } from '../../../interfaces/natural.interface';

@Component({
  selector: 'naturales-natural-card',
  templateUrl: './natural.component.html',
  styles: ``
})
export class NaturalComponent implements OnInit {

  @Input()
  public natural!: Natural;
  ngOnInit(): void {
    if ( !this.natural ) throw Error('Natural property is required')
  }

}
