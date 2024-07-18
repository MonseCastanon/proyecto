import { Component, OnInit } from '@angular/core';
import { HotelesService } from '../../services/hotel.service';
import { Hotel } from '../../interfaces/hotel.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: ``
})
export class ListadoComponent implements OnInit {
  public hoteles: Hotel[] = [];

  constructor(private hotelesService: HotelesService){}
  ngOnInit(): void {
    this.hotelesService.getHoteles()
    .subscribe(hoteles => this.hoteles = hoteles);
  }

}
