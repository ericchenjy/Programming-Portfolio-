import { Component, HostListener} from '@angular/core';
import { projects } from '../project/project-data';
import { Router } from '@angular/router';
import { workExperiences } from '../about/work-experiences';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  screenSize: boolean = window.innerWidth < 900;

  projectList = projects;
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
