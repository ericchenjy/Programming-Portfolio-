import { Component } from '@angular/core';
import { projects } from './project-data';
import { Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  
  projectList = projects;
  screenSize: boolean = window.innerWidth < 900;

  constructor(private router: Router){}

  pageRouter(id: number):void{
    this.router.navigate(['project-details', id]);
  }

  @HostListener('window:resize',['$event'])
  screenSizeChecking(event: Event): void{
    this.screenSize = window.innerWidth < 900;
  }

}
