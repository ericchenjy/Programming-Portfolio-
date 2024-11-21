import { Component } from '@angular/core';
import { projects } from './project-data';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  
  projectList = projects
}
