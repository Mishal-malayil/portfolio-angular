import { Component,ViewChild,ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
 @ViewChild('sidemenu') sidemenu!: ElementRef;
  openmenu() {
    this.sidemenu.nativeElement.style.right = '0';
  }

  closemenu() {
    this.sidemenu.nativeElement.style.right = '-200px';
  }
}
