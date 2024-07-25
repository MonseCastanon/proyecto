import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ItinerariosService } from '../../services/itinerario.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Itinerario } from '../../interfaces/itinerario.interface';
import { filter, switchMap, tap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-nuevoiti',
  templateUrl: './nuevoiti.component.html',
  styles: ``
})
export class NuevoitiComponent implements OnInit{
  //formulario reactivo
  public itinerarioForm = new FormGroup({
    id: new FormControl<string>(''),
    nombre: new FormControl<string>(''),
    dia: new FormControl<string>(''),
    hora: new FormControl<string>(''),
    actividades: new FormControl<string>(''),
    alt_img: new FormControl<string>(''),
  });
  constructor(
    private itinerariosService: ItinerariosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
  ){}

  get currentItinerario():Itinerario{
    const itinerario = this.itinerarioForm.value as Itinerario;
    return itinerario;
  }

  ngOnInit():void {

    if (!this.router.url.includes('editariti') ) return;

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.itinerariosService.getItinerarioById( id) ),
    ).subscribe(itinerario =>{

      if ( !itinerario ) {
        return this.router.navigateByUrl('/');
      }
      this.itinerarioForm.reset( itinerario );
      return;
    });

  }
  onSubmit():void {
    if ( this.itinerarioForm.invalid ) return;
    if ( this.currentItinerario.id) {
      this.itinerariosService.updateItinerario( this.currentItinerario )
      .subscribe( itinerario => {
        this.showSnackbar(`${ itinerario.nombre } updated`);
      } );
      return;
    }
    this.itinerariosService.addItinerario( this.currentItinerario )
    .subscribe( itinerario => {
      // TODO: mostrar snackbar y navegar a administrador/editar/itinerario.id
      this.router.navigate(['/administrador/editariti', itinerario.id]);
      this.showSnackbar(`${ itinerario.nombre } created`);
    });

  }
  showSnackbar(message: string ):void{
    this.snackbar.open( message, 'done',{
      duration: 2500,
    })
  }
  onDeleteItinerario(){
    if ( !this.currentItinerario.id ) throw Error('Itinerario id es required')
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data:this.itinerarioForm.value
      });

      dialogRef.afterClosed()
       .pipe(
        filter((result: boolean) => result),
        switchMap( () => this.itinerariosService.deleteItinerarioById( this.currentItinerario.id)),
        tap( wasDeleted => console.log({ wasDeleted})),
       )
       .subscribe(result =>{
          this.router.navigate(['/itinerarios'])
       })
  }

}


