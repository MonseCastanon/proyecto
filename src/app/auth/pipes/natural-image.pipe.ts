import { Pipe, PipeTransform } from '@angular/core';
import { Natural } from '../interfaces/natural.interface';

@Pipe({
  name: 'naturalImage'
})
export class NaturalImagePipe implements PipeTransform {

  transform( natural: Natural ): string {
    if( !natural.id && !natural.alt_img){
      return 'assets/no-image.png';
    }

    if ( natural.alt_img ) return natural.alt_img;

    return `assets/naturales/${ natural.id }.jpg`;

  }

}
