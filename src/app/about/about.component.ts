import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { workExperiences } from '../about/work-experiences';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  screenSize: boolean = window.innerWidth < 900;

  workExperiences = workExperiences;

  constructor(private router: Router){
  }
  
  pageRouter(path: string): void{
    this.router.navigate([path]);
  }


  @HostListener('window:resize',['$event'])
  screenSizeChecking(event: Event): void{
    this.screenSize = window.innerWidth < 900;
  }

}
