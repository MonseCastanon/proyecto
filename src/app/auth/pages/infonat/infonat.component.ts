import { Component, OnInit } from '@angular/core';
import { Natural } from '../../interfaces/natural.interface';
import { NaturalesService } from '../../services/natural.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-infonat',
  templateUrl: './infonat.component.html',
  styles: ``
})
export class InfonatComponent implements OnInit{
  public natural?: Natural;
  constructor(
    private naturalesService:NaturalesService,
    private activateRoute: ActivatedRoute,
    private router:Router,
  ){}
    ngOnInit(): void {
      this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.naturalesService.getNaturalById(id) ),
      )
      .subscribe( natural => {
        if ( !natural) return this.router.navigate(['/auth/atractivos']);

        this.natural = natural;
        console.log(natural);
        return;
      })
  }
  goBack():void{
    this.router.navigateByUrl('/auth/atractivos')
  }

}
