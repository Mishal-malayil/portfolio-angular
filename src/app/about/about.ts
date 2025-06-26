import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
selectedTab:string="skills" ;
setTab(tab:string) {
    this.selectedTab=tab;
}

}
