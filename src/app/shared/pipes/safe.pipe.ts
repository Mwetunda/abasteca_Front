import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl} from '@angular/platform-browser';

@Pipe({
  name: 'safe',
})
export class SafePipe implements PipeTransform {
constructor(protected sanitizer: DomSanitizer) {
}
 public transform(valor: any, tipo: string): SafeHtml | SafeStyle | SafeUrl| SafeResourceUrl | SafeScript {
  switch (tipo) {
      case 'html' : return this.sanitizer.bypassSecurityTrustHtml(valor);
      case 'style' : return this.sanitizer.bypassSecurityTrustStyle(valor);
      case 'script' : return this.sanitizer.bypassSecurityTrustScript(valor);
      case 'url' : return this.sanitizer.bypassSecurityTrustUrl(valor);
      case 'resourceUrl' : return this.sanitizer.bypassSecurityTrustResourceUrl(valor);
      default: return;
    }
  }

}
