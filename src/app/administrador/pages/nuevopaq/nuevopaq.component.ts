import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaquetesService } from '../../services/paquete.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap, tap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { Paquete } from '../../interfaces/paquete.interface';

@Component({
  selector: 'app-nuevopaq',
  templateUrl: './nuevopaq.component.html',
  styles: ``
})
export class NuevopaqComponent implements OnInit{
  //formulario reactivo
  public paqueteForm = new FormGroup({
    id: new FormControl<string>(''),
    nombre: new FormControl<string>(''),
    descripcion: new FormControl<string>(''),
    hotel: new FormControl<string>(''),
    restaurante: new FormControl<string>(''),
    experiencia: new FormControl<string>(''),
    actividad: new FormControl<string>(''),
    alt_img: new FormControl<string>(''),
  });
  constructor(
    private paquetesService: PaquetesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
  ){}

  get currentPaquete():Paquete{
    const paquete = this.paqueteForm.value as Paquete;
    return paquete;
  }

  ngOnInit():void {

    if (!this.router.url.includes('editarpaq') ) return;

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.paquetesService.getPaqueteById( id) ),
    ).subscribe(paquete =>{

      if ( !paquete ) {
        return this.router.navigateByUrl('/');
      }
      this.paqueteForm.reset( paquete );
      return;
    });

  }
  onSubmit():void {
    if ( this.paqueteForm.invalid ) return;
    if ( this.currentPaquete.id) {
      this.paquetesService.updatePaquete( this.currentPaquete )
      .subscribe( paquete => {
        this.showSnackbar(`${ paquete.nombre } updated`);
      } );
      return;
    }
    this.paquetesService.addPaquete( this.currentPaquete )
    .subscribe( paquete => {
      // TODO: mostrar snackbar y navegar a administrador/editar/paquete.id
      this.router.navigate(['/administrador/editarpaq', paquete.id]);
      this.showSnackbar(`${ paquete.nombre } created`);
    });

  }
  showSnackbar(message: string ):void{
    this.snackbar.open( message, 'done',{
      duration: 2500,
    })
  }
  onDeletePaquete(){
    if ( !this.currentPaquete.id ) throw Error('Paquete id es required')
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data:this.paqueteForm.value
      });

      dialogRef.afterClosed()
       .pipe(
        filter((result: boolean) => result),
        switchMap( () => this.paquetesService.deletePaqueteById( this.currentPaquete.id)),
        tap( wasDeleted => console.log({ wasDeleted})),
       )
       .subscribe(result =>{
          this.router.navigate(['/paquetes'])
       })
  }

}


