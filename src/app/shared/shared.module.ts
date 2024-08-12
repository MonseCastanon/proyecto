import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Error404PageComponent
  ],
  exports: [
    Error404PageComponent,
    FormsModule
  ]
})
export class SharedModule { }
