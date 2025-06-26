import { Component,ViewChild, ElementRef, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
selectedTab:string="skills" ;
setTab(tab:string) {
    this.selectedTab=tab;
}

  email: string = 'mishalmalayil2003@gmail.com';


}
   
     

