import { Pipe, PipeTransform } from '@angular/core';
import { Cultural } from '../interfaces/cultural.interface';

@Pipe({
  name: 'culturalImage'
})
export class CulturalImagePipe implements PipeTransform {

  transform( cultural: Cultural ): string {
    if( !cultural.id && !cultural.alt_img){
      return 'assets/no-image.png';
    }

    if ( cultural.alt_img ) return cultural.alt_img;

    return `assets/culturales/${ cultural.id }.jpg`;

  }

}
