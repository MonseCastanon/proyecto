import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
=======
import { FormsModule } from '@angular/forms';
>>>>>>> 8e900c8751e8dde744623760f06303723251aeca



@NgModule({
  declarations: [
    Error404PageComponent
  ],
  exports: [
    Error404PageComponent
  ],
  imports: [
    CommonModule,
    RouterModule, // Añade RouterModule aquí
<<<<<<< HEAD
=======
    Error404PageComponent,
    FormsModule
>>>>>>> 8e900c8751e8dde744623760f06303723251aeca
  ]
})
export class SharedModule { }
