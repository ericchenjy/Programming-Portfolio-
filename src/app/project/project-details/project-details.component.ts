import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { projects } from '../project-data';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})

export class ProjectDetailsComponent implements OnInit {

  projectId!: number;
  projectDetails: any;
  projectList = projects;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void{
    
    this.route.paramMap.subscribe(params=>{
      const id = params.get('id');
      if (id){
        this.projectId = +id;
        this.loadProjectDetails();
      }
    });
  }

  loadProjectDetails(): void{
    this.projectDetails = projects.find(project => project.id === this.projectId);
  }
}
