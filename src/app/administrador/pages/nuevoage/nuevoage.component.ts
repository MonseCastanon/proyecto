import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AgenciasService } from '../../services/agencia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Agencia } from '../../interfaces/agencia.interface';
import { filter, switchMap, tap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-nuevoage',
  templateUrl: './nuevoage.component.html',
  styles: ``
})
export class NuevoageComponent implements OnInit{
  //formulario reactivo
  public agenciaForm = new FormGroup({
    id: new FormControl<string>(''),
    nombre: new FormControl<string>(''),
    tipo: new FormControl<string>(''),
    ubicacion: new FormControl<string>(''),
    direccion: new FormControl<string>(''),
    contactos: new FormControl<string>(''),
    red_social: new FormControl<string>(''),
    correo: new FormControl<string>(''),
    alt_img: new FormControl<string>(''),
  });
  constructor(
    private agenciasService: AgenciasService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
  ){}

  get currentAgencia():Agencia{
    const agencia = this.agenciaForm.value as Agencia;
    return agencia;
  }

  ngOnInit():void {

    if (!this.router.url.includes('editarage') ) return;

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.agenciasService.getAgenciaById( id) ),
    ).subscribe(agencia =>{

      if ( !agencia ) {
        return this.router.navigateByUrl('/');
      }
      this.agenciaForm.reset( agencia );
      return;
    });

  }
  onSubmit():void {
    if ( this.agenciaForm.invalid ) return;
    if ( this.currentAgencia.id) {
      this.agenciasService.updateAgencia( this.currentAgencia )
      .subscribe( agencia => {
        this.showSnackbar(`${ agencia.nombre } actualizada`);
      } );
      return;
    }
    this.agenciasService.addAgencia( this.currentAgencia )
    .subscribe( agencia => {
      // TODO: mostrar snackbar y navegar a administrador/editar/agencia.id
      this.router.navigate(['/administrador/editarage', agencia.id]);
      this.showSnackbar(`${ agencia.nombre } creada`);
    });

  }
  showSnackbar(message: string ):void{
    this.snackbar.open( message, 'listo',{
      duration: 2500,
    })
  }
  onDeleteAgencia(){
    if ( !this.currentAgencia.id ) throw Error('Agencia id es required')
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data:this.agenciaForm.value
      });

      dialogRef.afterClosed()
       .pipe(
        filter((result: boolean) => result),
        switchMap( () => this.agenciasService.deleteAgenciaById( this.currentAgencia.id)),
        tap( wasDeleted => console.log({ wasDeleted})),
       )
       .subscribe(result =>{
          this.router.navigate(['administrador/listage'])
       })
  }


  goBack():void{
    this.router.navigateByUrl('administrador/listage')
  }

}


