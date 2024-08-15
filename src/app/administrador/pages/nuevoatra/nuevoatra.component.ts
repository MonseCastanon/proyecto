import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, filter, tap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { Atractivo } from '../../interfaces/atractivo.interface';
import { AtractivosService } from '../../services/atractivo.service';

@Component({
  selector: 'app-nuevoatra',
  templateUrl: './nuevoatra.component.html',
  styles: ``
})
export class NuevoatraComponent implements OnInit{
  //formulario reactivo
  public atractivoForm = new FormGroup({
    id: new FormControl<string>(''),
    nombre: new FormControl<string>(''),
    categoria: new FormControl<string>(''),
    tipologia: new FormControl<string>(''),
    localizacion: new FormControl<string>(''),
    descripcion: new FormControl<string>(''),
    accesibilidad: new FormControl<string>(''),
    actividades: new FormControl<string>(''),
    num_visitante_ideal: new FormControl<string>(''),
    fecha_ideal_visita: new FormControl<string>(''),
    segmento_mercado_potencial: new FormControl<string>(''),
    costo: new FormControl<string>(''),
    servicio: new FormControl<string>(''),
    alt_img: new FormControl<string>(''),
  });
  constructor(
    private atractivosService: AtractivosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
    private dialog: MatDialog,
  ){}

  get currentAtractivo():Atractivo{
    const atractivo = this.atractivoForm.value as Atractivo;
    return atractivo;
  }

  ngOnInit():void {

    if (!this.router.url.includes('editaratra') ) return;

    this.activatedRoute.params
    .pipe(
      switchMap( ({ id }) => this.atractivosService.getAtractivoById( id) ),
    ).subscribe(atractivo =>{

      if ( !atractivo ) {
        return this.router.navigateByUrl('/');
      }
      this.atractivoForm.reset( atractivo );
      return;
    });

  }
  onSubmit():void {
    if ( this.atractivoForm.invalid ) return;
    if ( this.currentAtractivo.id) {
      this.atractivosService.updateAtractivo( this.currentAtractivo )
      .subscribe( atractivo => {
        this.showSnackbar(`${ atractivo.nombre } editado`);
      } );
      return;
    }
    this.atractivosService.addAtractivo( this.currentAtractivo )
    .subscribe( atractivo => {
      // TODO: mostrar snackbar y navegar a administrador/editar/atractivo.id
      this.router.navigate(['/administrador/editaratra', atractivo.id]);
      this.showSnackbar(`${ atractivo.nombre } añadido`);
    });

  }
  showSnackbar(message: string ):void{
    this.snackbar.open( message, 'listo',{
      duration: 2500,
    })
  }
  onDeleteAtractivo(){
    if ( !this.currentAtractivo.id ) throw Error('Atractivo id es required')
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data:this.atractivoForm.value
      });

      dialogRef.afterClosed()
       .pipe(
        filter((result: boolean) => result),
        switchMap( () => this.atractivosService.deleteAtractivoById( this.currentAtractivo.id)),
        tap( wasDeleted => console.log({ wasDeleted})),
       )
       .subscribe(result =>{
          this.router.navigate(['/administrador/listatra'])
       })
  }

  goBack():void{
    this.router.navigateByUrl('administrador/listatra')
  }

}


