import { Component, OnInit } from '@angular/core';
import { Hotel } from '../../interfaces/hotel.interface';
import { HotelesService } from '../../services/hotel.service';

@Component({
  selector: 'app-atractivos',
  templateUrl: './atractivos.component.html',
  styles: ``
})
export class AtractivosComponent implements OnInit {
  public hoteles: Hotel[] = [];

  constructor(private hotelesService: HotelesService){}
  ngOnInit(): void {
    this.hotelesService.getHoteles()
    .subscribe(hoteles => this.hoteles = hoteles);
  }
}
