import { Component, OnInit } from '@angular/core';
import { Cultural } from '../../interfaces/cultural.interface';
import { CulturalesService } from '../../services/cultural.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-infocul',
  templateUrl: './infocul.component.html',
  styles: ``
})
export class InfoculComponent implements OnInit{
  public cultural?: Cultural;
  constructor(
    private culturalesService:CulturalesService,
    private activateRoute: ActivatedRoute,
    private router:Router,
  ){}
    ngOnInit(): void {
      this.activateRoute.params
      .pipe(
        switchMap(({ id }) => this.culturalesService.getCulturalById(id) ),
      )
      .subscribe( cultural => {
        if ( !cultural) return this.router.navigate(['/auth/culturales']);

        this.cultural = cultural;
        console.log(cultural);
        return;
      })
  }
  goBack():void{
    this.router.navigateByUrl('auth/culturales')
  }

}
