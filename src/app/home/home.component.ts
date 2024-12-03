import { Component, HostListener} from '@angular/core';
import { projects } from '../project/project-data';
import { Router } from '@angular/router';
import { workExperiences } from '../about/work-experiences';
import { skills } from './skills';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  
  projectList = projects;
  workExperiences = workExperiences;
  skills = skills;
  screenSize: boolean = window.innerWidth < 900;

  constructor(private router: Router){
  }
  
  pageRouter(path: string): void{
    this.router.navigate([path]);
  }

  pageRouterProject(id: number):void{
    this.router.navigate(['project-details', id]);
  }


  @HostListener('window:resize',['$event'])
  screenSizeChecking(event: Event): void{
    this.screenSize = window.innerWidth < 900;
  }


}
