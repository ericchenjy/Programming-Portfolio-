import { Component } from '@angular/core';
import { projects } from './project-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  
  projectList = projects

  constructor(private router: Router){}

  pageRouter(id: number):void{
    this.router.navigate(['project-details', id]);
  }

}
