import { Component, OnInit } from '@angular/core';
import { Natural } from '../../interfaces/natural.interface';
import { NaturalesService } from '../../services/natural.service';
import { Cultural } from '../../interfaces/cultural.interface';
import { CulturalesService } from '../../services/cultural.service';

@Component({
  selector: 'app-atractivos',
  templateUrl: './atractivos.component.html',
  styles: ``
})
export class AtractivosComponent implements OnInit {

  public naturales: Natural [] = [];
  public culturales: Cultural [] = [];


  constructor(
    private naturalesService: NaturalesService,
    private culturalesService: CulturalesService,
  ){}
  ngOnInit(): void {
    this.naturalesService.getNaturales()
    .subscribe(naturales => this.naturales = naturales);

    this.culturalesService.getCulturales()
    .subscribe(culturales => this.culturales = culturales);

  }
}
