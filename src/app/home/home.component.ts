import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
screenSize: boolean = window.innerWidth < 900;

  @HostListener('window:resize',['$event'])
  screenSizeChecking(event: Event): void{
    this.screenSize = window.innerWidth < 900;
  }
  
}
