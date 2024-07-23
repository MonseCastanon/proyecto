import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ExperienciasService } from '../../services/experiencia.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Experiencia } from '../../interfaces/experiencia.interface';
import { filter, switchMap, tap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-nuevoexp',
  templateUrl: './nuevoexp.component.html',
  styles: ``
})
export class NuevoexpComponent implements OnInit{
  //formulario reactivo
  public experienciaForm = new FormGroup({
    id: new FormControl<string>(''),
    nombre: new FormControl<string>(''),
    descripcion: new FormControl<string>(''),
    accesibilidad: new FormControl<string>(''),
    servicio: new FormControl<string>(''),
    costo: new FormControl<string>(''),
    contacto: new FormControl<string>(''),
    alt_img: new FormControl<string>(''),
  });
  constructor(
    private experienciasService: ExperienciasService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
  ){}

  get currentExperiencia():Experiencia{
    const experiencia = this.experienciaForm.value as Experiencia;
    return experiencia;
  }

  ngOnInit():void {

    if (!this.router.url.includes('editarexp') ) return;

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.experienciasService.getExperienciaById( id) ),
    ).subscribe(experiencia =>{

      if ( !experiencia ) {
        return this.router.navigateByUrl('/');
      }
      this.experienciaForm.reset( experiencia );
      return;
    });

  }
  onSubmit():void {
    if ( this.experienciaForm.invalid ) return;
    if ( this.currentExperiencia.id) {
      this.experienciasService.updateExperiencia( this.currentExperiencia )
      .subscribe( experiencia => {
        this.showSnackbar(`${ experiencia.nombre } updated`);
      } );
      return;
    }
    this.experienciasService.addExperiencia( this.currentExperiencia )
    .subscribe( experiencia => {
      // TODO: mostrar snackbar y navegar a administrador/editar/experiencia.id
      this.router.navigate(['/administrador/editarexp', experiencia.id]);
      this.showSnackbar(`${ experiencia.nombre } created`);
    });

  }
  showSnackbar(message: string ):void{
    this.snackbar.open( message, 'done',{
      duration: 2500,
    })
  }
  onDeleteExperiencia(){
    if ( !this.currentExperiencia.id ) throw Error('Experiencia id es required')
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data:this.experienciaForm.value
      });

      dialogRef.afterClosed()
       .pipe(
        filter((result: boolean) => result),
        switchMap( () => this.experienciasService.deleteExperienciaById( this.currentExperiencia.id)),
        tap( wasDeleted => console.log({ wasDeleted})),
       )
       .subscribe(result =>{
          this.router.navigate(['/experiencias'])
       })
  }

}


