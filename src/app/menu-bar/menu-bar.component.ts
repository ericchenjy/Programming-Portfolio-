import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  screenSize: boolean = window.innerWidth < 900;
  menuList:boolean = true;
  menuButtonChange:boolean = true;
  
  constructor(private router: Router){
  }

  projectPage(path: string): void{
    this.router.navigate([path]);

    this.menuList = !this.menuList;
    this.menuButtonChange = !this.menuButtonChange;
  }

  showCloseMenuListAndButtonChange(){
    this.menuList = !this.menuList;
    this.menuButtonChange = !this.menuButtonChange;
  }

  @HostListener('window:resize', ['$event'])
  screenSizeChecking(event: Event): void {
    this.screenSize = window.innerWidth < 900;
  }
}
